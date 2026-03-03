const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/:userId', transactionController.getTransactions);

module.exports = router;
