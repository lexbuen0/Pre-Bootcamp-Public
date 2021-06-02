const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Loading..."
    });
}

module.exports.findAll = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ product: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.findOne = (req, res) => {
    Product.find({ _id: req.params.id })
        .then(oneProduct => res.json ({ product: oneProduct}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}