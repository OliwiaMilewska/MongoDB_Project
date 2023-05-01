/* This script performs the following actions:

 1. Connects to a MongoDB instance running on localhost with port number 27017 and selects a database called "projectcrm".
 2. Drops any existing "RaportPending" view.
 3. Creates a new "RaportPending" view by joining the "orders" and "history" collections, unwinding the "products" array, and projecting fields such as the order ID, customer ID, order date, total cost, and number of previous orders.
 4. Uses the aggregation pipeline to calculate the new price after applying a discount based on the number of previous orders.
 5. Prints the updated order ID and new price in the console.

 Overall, the script aims to provide a report on pending orders and apply discounts to customers based on their previous order history. */

var db = connect("127.0.0.1:27017/projectcrm");

db.RaportPending.drop();
db.createView(
    "RaportPending",
    "orders",
    [
        {
            $match: {
                status: "pending",
            },
        },
        {
            $lookup: {
                from: "history",
                localField: "customerId",
                foreignField: "customerId",
                as: "productsHistory",
            },
        },
        {
            $unwind: {
                path: "$products",
            },
        },
        {
            $project: {
                _id: 1,
                orderId: 1,
                customerId: 1,
                date: 1,
                products: 1,
                status: 1,
                total: {
                    $sum: {
                        $multiply: [
                            "$products.amount",
                            "$products.productPrice",
                        ],
                    },
                },
                previousOrdersAmount: {
                    $size: "$productsHistory",
                },
            },
        }
    ]
)

var ordersToChange = db.RaportPending.aggregate([
    {
        $addFields: {
            totalAfterDiscount: {
                $cond: [
                    { $gte: ["$previousOrdersAmount", 5] },
                    { $multiply: ["$total", 0.93] }, // 7% discount
                    {
                        $cond: [
                            { $eq: ["$previousOrdersAmount", 3] },
                            { $multiply: ["$total", 0.95] }, // 5% discount
                            {
                                $cond: [
                                    { $eq: ["$previousOrdersAmount", 2] },
                                    { $multiply: ["$total", 0.97] }, // 3% discount
                                    "$total"
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
]).toArray();

ordersToChange.forEach(doc =>
    console.log("OrderId: " + doc.orderId + " New price: " + doc.totalAfterDiscount));