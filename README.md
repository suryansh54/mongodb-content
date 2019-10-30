# Mongo DB

## 1. Introduction
- MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
- MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.
- MongoDB is an open-source document database and leading NoSQL database. 
- MongoDB is written in C++.

#### Database
Database is a physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

#### Collection
Collection is a group of MongoDB documents. It is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection are of similar or related purpose.

#### Document
A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data.

RDBMS | MongoDB
------------ | -------------
Database | Database
Table | Table
Tuple/Row	 | Tuple/Row	
column | column
Table Join | Embedded Documents
Primary Key | Primary Key (Default key _id provided by mongodb itself)
Mysqld/Oracle	 | mongod
mysql/sqlplus | mongo

Any relational database has a typical schema design that shows number of tables and the relationship between these tables. While in MongoDB, there is no concept of relationship.

#### Advantages of MongoDB over RDBMS
- Schema less − MongoDB is a document database in which one collection holds different documents. Number of fields, content and size of the document can differ from one document to another.
- Structure of a single object is clear.
- No complex joins.
- Deep query-ability. MongoDB supports dynamic queries on documents using a document-based query language that's nearly as powerful as SQL.
- Tuning.
- Ease of scale-out − MongoDB is easy to scale.
- Conversion/mapping of application objects to database objects not needed.
- Uses internal memory for storing the (windowed) working set, enabling faster access of data.

#### Why Use MongoDB?
- Document Oriented Storage − Data is stored in the form of JSON style documents.
- Index on any attribute
- Replication and high availability
- Auto-sharding
- Rich queries
- Fast in-place updates
- Professional support by MongoDB

#### Where to Use MongoDB?
- Big Data
- Content Management and Delivery
- Mobile and Social Infrastructure
- User Data Management
- Data Hub

## 2. MongoDB - Environment
**Option-1:** Cloud Setup

https://cloud.mongodb.com/user#/cloud/register/accountProfile

**Option-2:** Setup on system

## 3. Database
#### 3A. Create Database
MongoDB **use DATABASE_NAME** is used to create database. The command will create a new database if it doesn't exist, otherwise it will return the existing database.

#### 3B. Drop Database
> use mydb <br>
switched to db mydb <br>
> db.dropDatabase() <br>
> show dbs <br>
