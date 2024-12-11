use test
db.books.distinct('title',{}).map(x=>x.toUpperCase())
db.books.distinct('categories').map(x=>{
const res=db.books.countDocuments({categories:x});
return x +":" +res})
db.books.aggregate([
{ $match: { status: 'PUBLISH'}},
    { $set: { is_publish: true}},
    { $project: { status: 0 } }])

