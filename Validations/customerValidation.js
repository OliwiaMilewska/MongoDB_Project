{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'clientId',
      'firstName',
      'lastName',
      'emailAddress',
      'phoneNumber',
      'address'
    ],
    properties: {
      clientId: {
        bsonType: 'string',
        pattern: '^[C]{1}[0-9]{6}$',
        description: 'Client ID'
      },
      firstName: {
        bsonType: 'string',
        description: 'First name of the customer'
      },
      lastName: {
        bsonType: 'string',
        description: 'Last name of the customer'
      },
      emailAddress: {
        bsonType: 'string',
        pattern: '^\\S+@\\S+\\.\\S+$',
        description: 'Email address of the customer'
      },
      phoneNumber: {
        bsonType: 'string',
        pattern: '^\\d{9}$',
        description: 'Phone number of the customer'
      },
      address: {
        bsonType: 'object',
        required: [
          'street',
          'city',
          'postalCode'
        ],
        properties: {
          street: {
            bsonType: 'string',
            description: 'Street address of the customer'
          },
          city: {
            bsonType: 'string',
            description: 'City of the customer'
          },
          postalCode: {
            bsonType: 'string',
            pattern: '^\\d{2}-\\d{3}$',
            description: 'Postal code of the customer\'s address'
          }
        }
      }
    }
  }
}