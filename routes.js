const express = require('express');
const router = express.Router();

// Routes for Books Management

const bookCtrl = require('./book-controller');

router.post('/book',bookCtrl.createBook);
router.get('/books',bookCtrl.getBooks);
router.get('/book/:id',bookCtrl.getBook);
router.delete('/book/:id',bookCtrl.deleteBook);
router.put('/book/:id',bookCtrl.updateBook);

module.exports = router;
