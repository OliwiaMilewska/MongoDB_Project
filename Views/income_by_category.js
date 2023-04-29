db.createView(
    "BestCategory",
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
                _id: "$product_info.category",
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
        {
            $sort: {
                total_earnings: -1,
            },
        },
    ]
)