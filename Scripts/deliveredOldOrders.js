//This script sets a variable oneMonthAgo to be the current date minus one month. It then finds all documents in the 'orders' collection that have a status of 'delivered' and an 'orderDate' that is older than oneMonthAgo. For each of these documents, it creates a new document in the 'history' collection with the same 'orderId', 'customerId', 'products', and a 'total' field calculated by summing the prices of each product ordered multiplied by its amount. The 'realizationDate' field is set to the current date. Finally, it deletes the original document from the 'orders' collection.

var db = connect("127.0.0.1:27017/projectcrm");

const oneMonthAgo = new Date();
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

db.orders.find({
    status: 'delivered',
    orderDate: { $lt: oneMonthAgo }
}).forEach(function (doc) {
    db.history.insertOne({
        orderId: doc.orderId,
        customerId: doc.customerId,
        products: doc.products,
        total: doc.products.reduce(function (sum, product) {
            return sum + product.productPrice * product.amount;
        }, 0),
        realizationDate: new Date()
    });
    db.orders.deleteOne({ _id: doc._id });
});