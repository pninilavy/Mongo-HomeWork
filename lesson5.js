use catalog
db.books.find({title:{$in:["c#","Python","Java"]}})
db.books.find({isbn: {$nin: [/^19/, "1884777384", /0/]}})
db.books.find({isbn: {$nor: [/^19/, /mongo/]}, pageCount: {$lte: 600}})
db.books.find({status:{$not:["PUBLISH"]}});
db.books.countDocuments({pageCount:{$mod:[10,0]}})
db.books.find({thumbnailUrl:{$exists:false}})

