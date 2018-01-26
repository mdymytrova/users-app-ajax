const express = require('express');

const router = express.Router();

const callback = require('./callbacks');

// Show homepage
router.get('/', callback.renderHomepage);

// Send all users
router.get('/api/users', callback.sendUsersData);

// Show users page
router.get('/users', callback.showUsersPage);

// POST new user
router.post('/api/users', callback.addNewUser);

router.get('/users/:id/edit', callback.showEditPage);

// UPDATE a user
router.post('/users/:id', callback.updateUser);

// // DELETE a user
router.delete('/users/delete/:id', callback.deleteUser);

module.exports = router;