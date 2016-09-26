const mongo = require('mongojs');
const db = mongo('ecommerce' , ['products']);

module.exports = {
  getProduct(req, res){
    const query = req.query;
    db.products.find( query , function (err , response) {
      if (err) {
        return res.status(500).json(err);
      }
      else {
        return res.json(response)
      }
    })
  }
  ,getOneProduct(req, res){

    const idObj = {
      _id: mongo.ObjectId(req.params.id)
    };
    db.products.findOne(idObj , function (err , response) {
      if (err) {
        return res.status(500).json(err);
      }
      else {
        return res.json(response);
      }
    })


  }
  ,postProduct(req, res){
    db.products.save(req.body , function (err , response) {
      if (err) {
        return res.status(500).json(err);
      }
      else{
        return res.json(response)
      }
    })
  }
  ,updateProduct(req, res){
    if (!req.params.id) {
      return res.status(400).send('Id query is needed')
    }
    const query = {
      _id: mongo.ObjectId(req.params.id)
    }
    db.products.update(query , req.body , function (err , response) {
      if (err) {
        return res.status(500).json(response);
      }
      else {
        return res.json(response)
      }
    })
  }
  ,deleteProduct(req, res){
    if(!req.params.id){
     return res.status(400).send('id query needed');
   }
   var query = {
     _id: mongo.ObjectId(req.params.id)
   };
   db.products.remove(query, function(error, response){
     if(error) {
       return res.status(500).json(error);
     } else {
       return res.json(response);
     }
   });
  }
}
