/*

create table products (

id int not null primary key identity(1, 1),
"name" varchar(20),
price int not null,
quantityAvailable int not null,
recordEntry datetime not null default (getdate()),
recordUpdate datetime default null

);

insert into products("name", price, quantityAvailable) values ('pulse', 2, 3), ('vegies', 5, 7);

*/

/*
select * from products;
*/

/*
delete from products where 1=1; 
*/
















