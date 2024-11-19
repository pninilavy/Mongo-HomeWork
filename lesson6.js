//8
db.getCollection("books").find({})

//8
db.books.find({"authors":"Robi Sen"},{title:1,longDescription:1})

//9
db.books.find({"authors":/a/},{title:1,longDescription:1})

//10
db.books.find({categories:["XML","Internet"]})

//11
db.books.find({categories:{$all:["XML","Internet"]}})

//12
db.books.countDocuments({"authors":""})

//13
db.books.countDocuments({"authors.2":""})

//14
db.books.find({"_id":{$type:"objectId"}})
