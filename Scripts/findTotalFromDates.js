// This script connects to a MongoDB database and prompts the user to enter a start date and an end date using passwordPrompt(). The dates are used in an aggregation pipeline that retrieves documents from the orders collection where the orderDate falls within the specified date range.

var db = connect("127.0.0.1:27017/projectcrm");

console.log("Enter start date:")
var startDate = passwordPrompt();
console.log();
console.log("Enter end date:")
var endDate = passwordPrompt();

var result = db.orders.aggregate(
    [
        {
            $match: {
                orderDate: {
                    $gte: ISODate(String(startDate)),
                    $lt: ISODate(String(endDate)),
                },
            },
        },
        {
            $unwind: "$products",
        },
        {
            $group: {
                _id: 0,
                total_earnings: {
                    $sum: {
                        $multiply: [
                            "$products.amount",
                            "$products.productPrice",
                        ],
                    },
                },
            },
        },
        {
            $project: {
              _id: 0,
              total_earnings: 1,
            },
        }
    ]
);
console.log();
console.log("Total earinings: " + printjson(result));
console.log("Documents search from dates: " + startDate + " - " + endDate);