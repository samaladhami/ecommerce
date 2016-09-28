// // const mongo = require('mongojs');
//
//
// // const db = mongo('ecommerce' , ['products']);


const Product = require('./Products')


module.exports = {



  //
  //
  getProduct(req, res){
    Product.find({} , (err , response) => {
      if (err) {
        return res.status(500).json(err)
      }
      else {
        return res.status(200).json(response)
      }
    });
  }
  ,getOneProduct(req, res){

    Product.findById({} , (err , response) => {
      if (err) {
        return res.status(500).json(err);
      }
      else {
        return res.status(200).json(response)
      }
    })

  }
  ,postProduct(req, res){
    Product.create(req.body , (err , response) => {
      if (err) {
        return res.status(500).json(err);
      }
      else {
        return res.status(201).json(response)
      }
    })
  }
  ,updateProduct(req, res){

    Product.findByIdAndUpdate(req.params.id ,req.body, (err , response) => {
      if (err) {
        return res.status(500).json(err)
      }
      else {
        return res.status(200).json(response)
      }
    })
  }
  ,deleteProduct(req, res){

    Product.findByIdAndRemove(req.params.id , (err , response) => {
      if (err) {
        return res.status(500).json(err)
      }
      else {
        return res.status(200).json(response)
      }
    })


  }
}
