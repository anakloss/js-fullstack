const express = require('express');
const router = express.Router()

const Book = require('../models/book')

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.post('/', async (req, res) => {
  const {title, author, isbn} = req.body;
  const newBook = new Book({title, author, isbn})
  await newBook.save();
  res.json({msg: 'Book saved'});
});

router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json('Book deleted');
});

module.exports = router;
