const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to db'))
    .catch(err => console.log("Error connecting to db", err));