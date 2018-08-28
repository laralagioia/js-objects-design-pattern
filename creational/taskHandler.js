var myrepo = require('./Repo');

taskHandler = function () {
    return {
        save: function () {
            myrepo.save('Hi from task Handler');
        }
    }
};

module.exports = taskHandler();