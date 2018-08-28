/*
************
CONSTRUCTORS
************
*/ 

/* NEW keyword: 
- creates a brand new object
- links to an object prototype
- bind 'this' to the new object scope
- implicity returns this
*/

/*
function ObjectName(par1, par2) {
    this.par1 = par1,
    this.par2 = par2,
    this.toString = function() {
        return this.par1 + ' ' + this.par2;
    }
    // implicit with new:
    return this; 
}
*/

/*
************
PROTOTYPES
************
*/ 

/*
ClassName.prototype.methodName = function (arguments) {
}

the protype exists in one place and all tasks have access
to this very same function instead of creating their own copy
*/


/*
************
MODULES
************
*/ 

/*
var Module = {
    var privateVar = 'I am private',
    method: function() {...},
    nextMethod: function(){...}
}

modules are collection of functions

*/


/*
************
FACTORY
************
- simplifies object creation

*/ 

/*
************
SINGLETON
************

*/

var Repo = require('./taskRepository');

var Task = function(data) {
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
    Repo.save(this);
};

module.exports = Task;