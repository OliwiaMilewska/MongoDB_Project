{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'employeeId',
      'firstName',
      'lastName',
      'position',
      'phoneNumber'
    ],
    properties: {
      employeeId: {
        bsonType: 'string',
        pattern: '^[A-Z]{1}[0-9]{3}$',
        description: 'Employee ID'
      },
      firstName: {
        bsonType: 'string',
        description: 'First name of the employee'
      },
      lastName: {
        bsonType: 'string',
        description: 'Last name of the employee'
      },
      position: {
        bsonType: 'string',
        description: 'Position of the employee'
      },
      phoneNumber: {
        bsonType: 'string',
        pattern: '^[0-9]{9}$',
        description: 'Phone number of the employee'
      }
    }
  }
}