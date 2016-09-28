angular.module('myApp')
.controller('myCtrl' , function ( $scope , myService) {


  $scope.getProducts = function () {
    myService.getProduct().then(function (result){
      $scope.products = result;
      console.log(result);
    })
  };
$scope.getProducts()

  $scope.postProduct = function (title , description , price) {

    let product = {
      title: title
      ,description: description
      ,price: parseInt(price)
    }
    myService.postProduct(product)
    $scope.title = '';
    $scope.description = '';
    $scope.price = '';


  }
  $scope.deleteProduct = function (id) {
    myService.deleteProduct(id).then(function (result) {
      console.log(result);
    })
  }



})
