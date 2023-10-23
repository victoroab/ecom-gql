# **PROJECT SETUP**

## Requirements

1. Node 14.0.0+
2. MySql installed on local machine

---

## Instructions for running the application.

1.  Download or clone the repository to your local machine.

2.  Open vscode or any code editor to open the project

3.  Open your terminal and navigate to the project directory

4.  In your vscode terminal run `npm install`

5.  Create a mysql database with any preferred name

6.  Create a .env file in the root directory of the project and populate it with:
    ```
    PORT: the port your application should run in
    DB_NAME: the name of your database
    DB_USERNAME: the username of the database user
    DB_HOST: the database host
    DB_PASSWORD: the database password
    DIALECT: mysql
    ```
7.  Open up your terminal and run `npm run dev`, this will start the project on the specified port and create the tables on the database

---

## Seeding

1. To sample data to the database, open a new terminal, then run `npm run seed`, this wll create 1000 users and 5000 orders, with each user having a random number of orders

2. To re-run the seed, you have to drop the 2 tables on the database (make sure foreign key check is disabled), restart the server to re-create the tables then run the seed script on a new terminal.

---

## Api Endpoints

### Open your web browser and enter http://localhost:PORT/graphql to send requests locally

### Test requests with the live api: https://ps-seq.onrender.com/graphql

### Queries:

1. **info: String!**

   - Returns a static string.

2. **users: [User!]!**

   - Returns a list of users.

3. **getUsersWithTopOrders: [Rank]**
   - Returns a list of ranked users based on their order counts.

### Mutations:

1. **userById(id: Int!): User**

   - Returns a user by the specified ID.

2. **createUser(firstName: String!, lastName: String!, email: String!): User!**

   - Creates a new user with the provided information.

3. **createOrder(item: String!, totalAmount: Float!, quantity: Int!, order: Int): Order!**

   - Creates a new order with the given details.

4. **getOrders(userId: Int!): [Order]!**
   - Returns a list of orders for the specified user ID.

### Types:

1. **User:**

   - Represents a user with the following fields:
     - id: ID!
     - firstName: String
     - lastName: String
     - email: String
     - OrderId: Int
     - orders: [Order]

2. **Order:**

   - Represents an order with the following fields:
     - id: ID!
     - item: String!
     - totalAmount: Float
     - quantity: Int!
     - order: Int

3. **Rank:**
   - Represents the rank of a user with the following fields:
     - firstname: String!
     - lastname: String!
     - order_count: String!
