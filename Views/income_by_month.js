db.createView(
    "IncomeByMonth",
    "orders",
    [
        {
            $match: {
                status: {
                    $in: ["pending", "shipped"],
                },
            },
        },
        {
            $lookup: {
                from: "history",
                localField: "customerId",
                foreignField: "customerId",
                as: "products_history",
            },
        },
        {
            $project: {
                orderDate: 1,
                combined_products: {
                    $concatArrays: [
                        "$products",
                        "$products_history.products",
                    ],
                },
            },
        },
        {
            $unwind: "$combined_products",
        },
        {
            $lookup: {
                from: "products",
                localField: "combined_products.productId",
                foreignField: "productId",
                as: "product_info",
            },
        },
        {
            $unwind: "$product_info",
        },
        {
            $unwind: {
                path: "$combined_products.amount",
            },
        },
        {
            $group: {
                _id: {
                    $dateToString: {
                        format: "%Y-%m",
                        date: "$orderDate"
                    }
                },
                total_earnings: {
                    $sum: {
                        $multiply: [
                            "$combined_products.amount",
                            "$product_info.price",
                        ],
                    },
                },
            },
        },
    ]
)