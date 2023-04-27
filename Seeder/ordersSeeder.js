db.orders.insertMany([
  {
    orderId: "O0010",
    orderDate: new Date("2023-04-25"),
    status: 'pending',
    customerId: "C123456",
    customerLastName: 'Kowalski',
    products: [
      {
        productId: "P002",
        productName: 'Fertilizer for Tomatoes Substral Naturen Bio',
        productPrice: 37.99,
        amount: 4
      },
      {
        productId: "P003",
        productName: 'Antibacterial Hand Gel Dezynfekcja',
        productPrice: 22.99,
        amount: 2
      }
    ]
  },
  {
    orderId: "O0011",
    orderDate: new Date("2023-04-26"),
    status: 'shipped',
    customerId: "C654321",
    customerLastName: 'Nowak',
    products: [
      {
        productId: "P004",
        productName: 'Womens Hoodie Reserved',
        productPrice: 199.99,
        amount: 1
      }
    ]
  },
  {
    orderId: "O0012",
    orderDate: new Date("2023-03-29"),
    status: 'delivered',
    customerId: "C123456",
    customerLastName: 'Kowalski',
    products: [
      {
        productId: "P006",
        productName: 'Adidas Ultraboost 21 Shoes',
        productPrice: 699.99,
        amount: 1
      },
      {
        productId: "P007",
        productName: "Levi's 501 Original Jeans",
        productPrice: 399.99,
        amount: 1
      },
      {
        productId: "P010",
        productName: 'Carhartt WIP Pocket T-Shirt',
        productPrice: 169.99,
        amount: 2
      }
    ]
  },
  {
    orderId: "O0013",
    orderDate: new Date("2023-04-16"),
    status: 'pending',
    customerId: "C654321",
    customerLastName: 'Nowak',
    products: [
      {
        productId: "P001",
        productName: 'Smartwatch Xiaomi Amazfit GTR 2e',
        productPrice: 899.99,
        amount: 1
      }
    ]
  },
  {
    orderId: "O0014",
    orderDate: new Date("2023-03-06"),
    status: 'delivered',
    customerId: "C456123",
    customerLastName: 'Wójcik',
    products: [
      {
        productId: "P001",
        productName: 'Smartwatch Xiaomi Amazfit GTR 2e',
        productPrice: 899.99,
        amount: 1
      },
      {
        productId: "P008",
        productName: 'Bosch GSB 18V-21 Professional Drill',
        productPrice: 899.99,
        amount: 1
      }
    ]
  },
  {
    orderId: "O0015",
    orderDate: new Date("2023-02-16"),
    status: 'delivered',
    customerId: "C987654",
    customerLastName: 'Wójcik',
    products: [
      {
        productId: "P001",
        productName: 'Fertilizer for Tomatoes Substral Naturen Bio',
        productPrice: 37.99,
        amount: 5
      },
      {
        productId: "P003",
        productName: 'Antibacterial Hand Gel Dezynfekcja',
        productPrice: 22.99,
        amount: 3
      }
    ]
  },
  {
    orderId: "O0016",
    orderDate: new Date("2023-04-16"),
    status: 'shipped',
    customerId: "C000001",
    customerLastName: 'Nowicki',
    products: [
      {
        productId: "P005",
        productName: 'Wireless Headphones Sony WH-CH510',
        productPrice: 599.99,
        amount: 10
      }
    ]
  },
  {
    orderId: "O0017",
    orderDate: new Date("2023-04-29"),
    status: 'pending',
    customerId: "C999999",
    customerLastName: 'Piotrowski',
    products: [
      {
        productId: "P009",
        productName: 'Puma RS-Fast Sneakers',
        productPrice: 479.99,
        amount: 1
      },
      {
        productId: "P011",
        productName: "Bridgestone Potenza RE-71R Tires",
        productPrice: 879.99,
        amount: 4
      },
      {
        productId: "P014",
        productName: 'Castrol EDGE 5W-30 Motor Oil',
        productPrice: 89.99,
        amount: 3
      }
    ]
  },
  {
    orderId: "O0018",
    orderDate: new Date("2023-03-22"),
    status: 'pending',
    customerId: "C567890",
    customerLastName: 'Milewska',
    products: [
      {
        productId: "P001",
        productName: 'Smartwatch Xiaomi Amazfit GTR 2e',
        productPrice: 899.99,
        amount: 1
      }
    ]
  },
  {
    orderId: "O0019",
    orderDate: new Date("2023-04-12"),
    status: 'shipped',
    customerId: "C678901",
    customerLastName: 'Kłos',
    products: [
      {
        productId: "P005",
        productName: 'Wireless Headphones Sony WH-CH510',
        productPrice: 599.99,
        amount: 2
      }
    ]
  },
  {
    orderId: "O0020",
    orderDate: new Date("2023-04-02"),
    status: 'shipped',
    customerId: "C345678",
    customerLastName: 'Kaminska',
    products: [
      {
        productId: "P006",
        productName: 'Adidas Ultraboost 21 Shoes',
        productPrice: 699.99,
        amount: 1
      }
    ]
  },
  {
    orderId: "O0021",
    orderDate: new Date("2023-02-19"),
    status: 'delivered',
    customerId: "C901234",
    customerLastName: 'Mazur',
    products: [
      {
        productId: "P009",
        productName: 'Puma RS-Fast Sneakers',
        productPrice: 479.99,
        amount: 1
      },
      {
        productId: "P007",
        productName: "Levi's 501 Original Jeans",
        productPrice: 399.99,
        amount: 1
      },
      {
        productId: "P014",
        productName: 'Castrol EDGE 5W-30 Motor Oil',
        productPrice: 89.99,
        amount: 3
      },
      {
        productId: "P012",
        productName: 'Nike Sportswear Windrunner Jacket',
        productPrice: 399.99,
        amount: 1
      }
    ]
   },
   {
    orderId: "O0022",
    orderDate: new Date("2023-04-28"),
    status: 'pending',
    customerId: "C456789",
    customerLastName: 'Kubiak',
    products: [
      {
        productId: "P013",
        productName: 'Wrangler Texas Jeans',
        productPrice: 299.99,
        amount: 1
      },
      {
        productId: "P015",
        productName: "Nike Air Max 2090 Sneakers",
        productPrice: 649.99,
        amount: 1
      },
      {
        productId: "P014",
        productName: 'Castrol EDGE 5W-30 Motor Oil',
        productPrice: 89.99,
        amount: 1
      },
      {
        productId: "P010",
        productName: 'Carhartt WIP Pocket T-Shirt',
        productPrice: 169.99,
        amount: 1
      }
    ]
    },
    {
        orderId: "O0023",
        orderDate: new Date("2023-05-02"),
        status: 'pending',
        customerId: "C012345",
        customerLastName: 'Baranowska',
        products: [
          {
            productId: "P004",
            productName: 'Womens Hoodie Reserved',
            productPrice: 199.99,
            amount: 1
          }
        ]
    },
    {
        orderId: "O0024",
        orderDate: new Date("2023-05-06"),
        status: 'pending',
        customerId: "C348956",
        customerLastName: 'Wasilewska',
        products: [
          {
            productId: "P011",
            productName: 'Bridgestone Potenza RE-71R Tires',
            productPrice: 879.99,
            amount: 4
          }
        ]
    },
    {
        orderId: "O0025",
        orderDate: new Date("2023-05-07"),
        status: 'pending',
        customerId: "C104638",
        customerLastName: 'Natan',
        products: [
          {
            productId: "P008",
            productName: 'Bosch GSB 18V-21 Professional Drill',
            productPrice: 899.99,
            amount: 1
          }
        ]
    },
    {
        orderId: "O0026",
        orderDate: new Date("2023-05-01"),
        status: 'pending',
        customerId: "C672015",
        customerLastName: 'Lis',
        products: [
          {
            productId: "P010",
            productName: 'Carhartt WIP Pocket T-Shirt',
            productPrice: 169.99,
            amount: 7
          }
        ]
    }
]);