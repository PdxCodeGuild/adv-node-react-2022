
# Relational (SQL) Databases

Relational databases, or **SQL (Structured Query Language) databases**), have been the primary data storage mechanism for decades. 

### Schemas
SQL databases store related data in tables, and require a *schema* that strictly defines the tables attributes and data types prior to use. 

**Car schema:**

| Attribute Name | Data Type       |
| -------------- | --------------- |
| ID             | Int Primary Key |
| Year           | Date            |
| Make           | Char            |
| Model          | Char            |

### Tables 
You can think of SQL databases like a spreadsheet that is really strict with what you put in each row.


**Car table:**

| ID  | Year | Make        | Model    |
| --- | ---- | ----------- | -------- |
| 1   | 1999 | 'Honda'     | 'Civic'  |
| 2   | 1985 | 'Subaru'    | 'Leone'  |
| 3   | 1982 | 'Chevrolet' | 'Camaro' |
| 4   | 1999 | 'Honda'     | 'Civic'  |

If, for instance, I tried to create this new car entry:

| ID  | Year | Make | Model |
| --- | ---- | ---- | ----- |
| 'a' | 0000 | 0000 | 0000  |

This relational database wouldn't allow it, since we aren't conforming to the data types outlined in our car schema.

If I tried to create this new car entry:

| ID  | Year | Make   | Model         | License # |
| --- | ---- | ------ | ------------- | --------- |
| 5   | 1984 | 'Ford' | 'Thunderbird' | 606XED    |

This relational database wouldn't allow it! All entries must follow the rules outlined in the schema. I would instead need to update the schema with a new attribute `LICENSE #` and go back and update the values of all existing car entries with a default value.

If I tried to create this new car entry:

| ID  | Year | Make     | Model   |
| --- | ---- | -------- | ------- |
| 1   | 2009 | 'Toyota' | 'Camry' |

This relational database wouldn't allow it, since `ID` is a **primary key**. 
A primary key guarantees that each entry is a *unique* value for that table. If we refer to the car table above, we can see that we already have an entry with the ID of 1.

### Normalization
Relational databases also encourage *normalization* to reduce data redundancy. This means you break your tables down into their smallest discrete components to minimize repetition and thus minimizing anomalies.

Referring back to our car example, let's consider a car sales table. We could have something like this:

| Sale ID | Car ID | Year | Make        | Model    | Purchase Date | Customer    | Phone        |
| ------- | ------ | ---- | ----------- | -------- | ------------- | ----------- | ------------ |
| 1       | 3      | 1982 | 'Chevrolet' | 'Camaro' | 07/11/2016    | 'J. Jorgo'  | 555-555-5555 |
| 2       | 2      | 1985 | 'Subaru'    | 'Leone'  | 07/11/2016    | 'J. Jorgo'  | 555-555-5555 |
| 3       | 1      | 1999 | 'Honda'     | 'Civic'  | 07/13/2016    | 'G. Yorgus' | 555-666-6666 |
| 4       | 4      | 1999 | 'Honda'     | 'Civic'  | 07/13/2016    | 'D. Devito' | 555-777-7777 |

Notice how there's a lot of repetition going on here. We can *normalize* this table, or break the `Car Sales` table into separate `Sales`, `Car`, `Customer` tables. The idea here is that each table should only contain information pertinent to itself.

The `Car` table stays the same as we defined above:

| ID  | Year | Make        | Model    |
| --- | ---- | ----------- | -------- |
| 1   | 1999 | 'Honda'     | 'Civic'  |
| 2   | 1985 | 'Subaru'    | 'Leone'  |
| 3   | 1982 | 'Chevrolet' | 'Camaro' |
| 4   | 1999 | 'Honda'     | 'Civic'  |

`Customer` table:

| ID  | Last Name | First Name | Phone        | Email                    |
| --- | --------- | ---------- | ------------ | ------------------------ |
| 1   | 'Jorgo'   | 'Jorge'    | 555-555-5555 | jorgeo@jorgej.org        |
| 2   | 'Yorgus'  | 'Bjorn'    | 555-666-6666 | bjornus@bjorny.org       |
| 3   | 'Devito'  | 'Dangus'   | 555-777-7777 | mantistoboggan@devito.me |

`Sales` table:

| Sale ID | Car ID | Customer ID | Purchase Date |
| ------- | ------ | ----------- | ------------- |
| 1       | 3      | 1           | 07/11/2016    |
| 2       | 2      | 1           | 07/11/2016    |
| 3       | 1      | 2           | 07/13/2016    |
| 4       | 4      | 3           | 07/13/2016    |

Notice how concise the `Sales` table is now. Instead of containing repetitive information, we now reference a car and customer by *foreign keys*. This is what makes relational databases *relational*. We shrink down the information into normalized tables and instead reference related tables using their keys.

Let's look at its schema:

**Sales schema:**

| Attribute Name | Data Type            |
| -------------- | -------------------- |
| Sale ID        | Int                  |
| Car ID         | ForeignKey(Car)      |
| Customer ID    | ForeignKey(Customer) |
| Purchase Date  | Date                 |


### ACID Properties
Relational databases access and/or modify data in logical units called a *transaction*. Transactions are essentially read and write operations bundled together.

To maintain *data integrity* before and after a transaction, databases follow a set of properties called **ACID**.

- **Atomicity**
    - All-or-nothing behavior: either *everything* in the transaction is completed, or *none* of it happens.
- **Consistency**
    - Transactions must change data only in allowed ways (following schemas, constraints, cascades, etc.)
- **Isolation**
    - Transactions can run at the same time, but one transition cannot view any uncommitted changes of another transaction.
- **Durability**
    - Completed transactions are stored/written to disk and persist even if a system failure occurs.

In short, a relational database transaction will either complete with correct results or terminate with no effect. This maintains that the database will always be in a consistent state.

Popular relational databases include: Oracle, PostgresQL, and MySQL.
