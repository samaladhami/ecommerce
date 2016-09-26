
const mainCtrl = require('./mainCtrl.js')



module.exports = (app) => {
app.get('/api/products', mainCtrl.getProduct);

app.get('/api/products/:id', mainCtrl.getOneProduct);

app.post('/api/products', mainCtrl.postProduct);

app.put('/api/products/:id', mainCtrl.updateProduct);

app.delete('/api/products/:id', mainCtrl.deleteProduct);
}
