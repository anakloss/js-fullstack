const express = require('express');
const router = express.Router()

const Book = require('../models/Book')

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.post('/', async (req, res) => {
  const { title, author, isbn } = req.body;
  const imagePath = '/uploads/' + req.file.filename;
  const newBook = new Book({title, author, isbn, imagePath});
  await newBook.save();
  res.json({msg: 'Book saved'});
});

router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({msg: 'Book deleted'});
});

module.exports = router;
