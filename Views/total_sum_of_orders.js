db.createView(
    "TotalOrders",
    "history",
    [
        {
            $lookup: {
                from: "customers",
                localField: "customerId",
                foreignField: "clientId",
                as: "client",
            },
        },
        {
            $unwind: {
                path: "$client",
            },
        },
        {
            $project: {
                _id: 0,
                clientId: "$client.clientId",
                firstName: "$client.firstName",
                lastName: "$client.lastName",
                email: "$client.emailAddress",
                total_sum_of_orders: "$total",
            },
        },
        {
            $group: {
                _id: "$clientId",
                firstName: {
                    $first: "$firstName",
                },
                lastName: {
                    $first: "$lastName",
                },
                email: {
                    $first: "$email",
                },
                total_sum_of_orders: {
                    $sum: "$total_sum_of_orders",
                },
            },
        },
        {
            $lookup: {
                from: "orders",
                localField: "_id",
                foreignField: "customerId",
                as: "not_yet_delivered",
            },
        },
        {
            $match: {
                "not_yet_delivered.status": {
                    $in: ["pending", "shipped"],
                },
            },
        },
        {
            $unwind: {
                path: "$not_yet_delivered",
            },
        },
        {
            $addFields: {
                total_product_price: {
                    $sum: "$not_yet_delivered.products.productPrice",
                },
            },
        },
        {
            $project: {
                firstName: 1,
                lastName: 1,
                email: 1,
                total_sum_of_orders: {
                    $add: [
                        "$total_sum_of_orders",
                        "$total_product_price",
                    ],
                },
            },
        },
        {
            $sort: {
                total_sum_of_orders: -1,
            },
        },
    ]
)
