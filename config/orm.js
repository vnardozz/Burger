var connection = require("../config/connection.js");

connection.connect(function (err) {
  if (err) {
    console.log("Error", err.stack);
  }
});

var orm = {
  addBurger: function (burger, res) {
    var burgerName = burger;
    var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
    connection.query(mySQLQuery, function (err, result) {
      if (err) throw err;
      res(result);
    });
  },
  eatBurger: function (burgerId, res) {
    var id = burgerId;
    //query made to update burgers that have been devoured based on id
    connection.query("UPDATE burgers SET devoured=1 WHERE id=?", [id], function (err, result) {
      if (err) throw err;
      res(result);
    });
  },
  showBurgers: function (tableName, res) {
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      res(result);
    });
  }
};

module.exports = orm;