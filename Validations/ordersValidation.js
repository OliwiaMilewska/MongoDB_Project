{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'orderId',
      'orderDate',
      'status',
      'customerId',
      'customerLastName',
      'products'
    ],
    properties: {
      orderId: {
        bsonType: 'string',
        pattern: '^[O]{1}[0-9]{4}$',
        description: 'Order ID'
      },
      orderDate: {
        bsonType: 'date',
        description: 'The date the order was placed'
      },
      status: {
        bsonType: 'string',
        'enum': [
          'pending',
          'shipped',
          'delivered'
        ],
        description: 'The status of the order'
      },
      customerId: {
        bsonType: 'string',
        pattern: '^[C]{1}[0-9]{6}$',
        description: 'The ID of the customer who placed the order'
      },
      customerLastName: {
        bsonType: 'string',
        description: 'The last name of the customer who placed the order'
      },
      products: {
        bsonType: 'array',
        description: 'A table of objects containing details of each product ordered',
        items: {
          bsonType: 'object',
          required: [
            'productId',
            'productName',
            'productPrice'
          ],
          properties: {
            productId: {
              bsonType: 'string',
              pattern: '^[P]{1}[0-9]{3}$',
              description: 'The ID of the product ordered'
            },
            productName: {
              bsonType: 'string',
              description: 'The name of the product ordered'
            },
            productPrice: {
              bsonType: 'number',
              minimum: 0,
              description: 'The price of the product ordered'
            },
            amount: {
              bsonType: 'number',
              minimum: 0,
              description: 'The amount of the product ordered'
            }
          }
        }
      }
    }
  }
}