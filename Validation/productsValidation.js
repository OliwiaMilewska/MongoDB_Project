{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'productId',
      'productName',
      'description',
      'price',
      'category'
    ],
    properties: {
      productId: {
        bsonType: 'string',
        pattern: '^[P]{1}[0-9]{3}$',
        description: 'Product ID'
      },
      productName: {
        bsonType: 'string',
        description: 'Product name'
      },
      description: {
        bsonType: 'string',
        description: 'Product description'
      },
      price: {
        bsonType: 'double',
        minimum: 0,
        description: 'Product price'
      },
      category: {
        bsonType: 'string',
        description: 'Product category'
      }
    }
  }
}