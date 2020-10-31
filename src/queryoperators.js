
/*And explicito*/
db.inventory.find( {
    $and: [
        { $or: [ { qty: { $lt : 10 } }, { qty : { $gt: 50 } } ] },
        { $or: [ { status: "A" }]}]}) ;


 //{ "_id" : ObjectId("5f9d5fd97e537906be0f4931"), "item" : "emaps", "qty" : 60, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }



 /*And explicito*/
db.inventory.find( {
    $and: [
        { $or: [ { qty: { $lt : 30 } }, { qty : { $gt: 50 } } ] },
        { item: { $not: /^p.*/ } }]} ) ;

        /* los mas pequeños de 30 y mayores de 50 Y que no empiecen por p*/
        
/*{ "_id" : ObjectId("5f9d5fd97e537906be0f492c"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4931"), "item" : "emaps", "qty" : 60, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4932"), "item" : "ebook", "qty" : 15, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "C" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4933"), "item" : "libro", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "C" }*/

 db.inventory.find( { qty: { $ne: 100 } } );

//{ "_id" : ObjectId("5f9d5fd97e537906be0f492c"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f492d"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f492f"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f4930"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f4931"), "item" : "emaps", "qty" : 60, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f4932"), "item" : "ebook", "qty" : 15, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "C" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f4933"), "item" : "libro", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "C" }


/* AND implicito*/

db.inventory.find({
    status: "A",
    qty: 25
});

//{ "_id" : ObjectId("5f9d5fd97e537906be0f492c"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }


/* AND implicito*/

db.inventory.find({
    status: "C",
    qty: 75
});

/*{ "_id" : ObjectId("5f9d5fd97e537906be0f4933"), "item" : "libro", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "C" }*/


db.inventory.find( { status: { $in: [ "A", "D" ] } } ).count();

/* coge los A y los D*/

/*6*/

db.inventory.find( { qty: { $in: [ 75 ] } } ).count();

/*2*/

db.inventory.find( { status: { $not: { $eq: "B" } } } );

/*Todos menos los del status B*/

/*{ "_id" : ObjectId("5f9d5fd97e537906be0f492c"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f492d"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f492e"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f492f"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4930"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4931"), "item" : "emaps", "qty" : 60, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4932"), "item" : "ebook", "qty" : 15, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "C" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4933"), "item" : "libro", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "C" }*/

db.inventory.find( { item: { $not: { $regex: "^e.*" } } } );

/*todos los que no empiezan por e*/

/*{ "_id" : ObjectId("5f9d5fd97e537906be0f492c"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f492d"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f492e"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f492f"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4930"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4933"), "item" : "libro", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "C" }*/

db.inventory.find( { qty: { $gte: 80 } } );

/*{ "_id" : ObjectId("5f9d5fd97e537906be0f492e"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }*/

db.inventory.find( { $or: [ { quantity: { $lt: 50 } }, { status: "A" } ] } );

db.inventory.find( { $or: [ { quantity: { $lt: 50 } }, { status: "A" } ] } );

/*{ "_id" : ObjectId("5f9d5fd97e537906be0f492c"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f492d"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4930"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9d5fd97e537906be0f4931"), "item" : "emaps", "qty" : 60, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }*/
