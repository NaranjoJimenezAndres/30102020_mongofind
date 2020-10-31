db.inventory.find( { status: "A" } )

//{ "_id" : ObjectId("5f9d5fd97e537906be0f492c"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f492d"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f4930"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f4931"), "item" : "emaps", "qty" : 60, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }


db.inventory.find( { status: { $in: [ "C", "D" ] } } )

//{ "_id" : ObjectId("5f9d5fd97e537906be0f492e"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f492f"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f4932"), "item" : "ebook", "qty" : 15, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "C" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f4933"), "item" : "libro", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "C" }




db.inventory.find( { status: "A", qty: { $gt: 50 } } )

//{ "_id" : ObjectId("5f9d5fd97e537906be0f4931"), "item" : "emaps", "qty" : 60, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }



db.inventory.find( {
    status: "A",
    $or: [ { qty: { $lt: 30 } }, { item: /^e/ } ]
} )
// { "_id" : ObjectId("5f9d5fd97e537906be0f492c"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
//{ "_id" : ObjectId("5f9d5fd97e537906be0f4931"), "item" : "emaps", "qty" : 60, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" } 