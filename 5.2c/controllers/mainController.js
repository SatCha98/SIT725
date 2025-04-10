const User = require("../models/userModel");

exports.homePage = (req, res) => {
  const user = new User("Lucy", "lucy@orp.com");
  res.render("index", { user });
};
