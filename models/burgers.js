var orm = require("../config/orm.js");

// Code to call the ORM functions using burger specific input for the ORM
//=====================================================================================

var burger = {

	all: function(cb) {
    	orm.all("burgers", function(res) { //"burgers" refers to the table in the db
     	 cb(res);
    	});
  	},
};

//=====================================================================================

// Export the database functions for the controller (catsController.js).
module.exports = burgers;

//=====================================================================================