const users = require("../models/userlist");

const callbackObject = {};

// Show Homepage
callbackObject.renderHomepage = (req, res) => res.render('home');

// Send all users
callbackObject.sendUsersData = (req, res) => res.send(users);

callbackObject.showUsersPage = (req, res) => res.render('users');

callbackObject.addNewUser = (req, res) => {
  res.end();
};


callbackObject.showEditPage = (req, res) => {
  const id = req.params.id;
  const idObject = {
    users: users,
    id: id
  };
  res.render('users-edit', { idObject });
};


callbackObject.updateUser = (req, res) => {
  // res.redirect('/users');
  res.end();
};


callbackObject.deleteUser = (req, res) => {
  delete users[req.params.id];
  res.end();
};

module.exports = callbackObject;