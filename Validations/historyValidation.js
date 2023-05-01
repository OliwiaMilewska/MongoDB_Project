{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'orderId',
      'customerId',
      'products',
      'total',
      'realizationDate'
    ],
    properties: {
      orderId: {
        bsonType: 'string',
        pattern: '^[O]{1}[0-9]{4}$',
        description: 'The unique identifier for the order'
      },
      customerId: {
        bsonType: 'string',
        pattern: '^[C]{1}[0-9]{6}$',
        description: 'The unique identifier for the customer'
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
      },
      total: {
        bsonType: 'double',
        minimum: 0,
        description: 'Order value'
      },
      realizationDate: {
        bsonType: 'date',
        description: 'The date the order was realized'
      }
    }
  }
}