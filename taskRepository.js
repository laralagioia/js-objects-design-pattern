var repo = function() {
    var db = {}
    
    var get = function(id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    }

    var save = function(task) {
        console.log('Saving task ' + task.name + ' to the db');

    }

    return {
        get: get,
        save: save
    }
}


// another way to do it

/* 
var repo = function() {
    var db = {};

    return {
        get: function(id) {
            console.log('Getting task ' + id);
            return {
                name: 'new task from db'
            }
        },

        save: function(task) {
            console.log('Saving task ' + task.name + ' to the db');

        }
    }
}
*/

module.exports = repo();