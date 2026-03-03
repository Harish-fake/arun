const Transaction = require('../models/transaction');

exports.getTransactions = async (req, res) => {
    const transactions = await Transaction.find({ userId: req.params.userId });
    res.json(transactions);
};
