angular.module('myApp')
.service('myService' , function ( $http ) {

this.getProduct = function () {
  return $http.get('/api/products').then(function (response) {
    if (response.status === 200) {
    return response.data
    }
    else {
      return response.status;
    }
  })
}

this.postProduct = function (obj) {
  $http({
    method: 'POST'
    ,url: '/api/products'
    ,data: obj
  })
  .then(function (response) {
    console.log(response.data);
  })
}

this.deleteProduct = function (id) {
  $http.delete('/api/products/:id', {params: {id: id}})
  .then(function (response) {
    if (response.data){

    alert('Data Deleted Successfully!');}
  })
}

})
