var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('compleating task: ' + task.name);
        },

        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },

        notifiyCompletion: function(task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },

        save: function (task) {
            console.log('saving Task ' + task.name);
        }
        
    }
}();


//FACADE IMPLEMENTATION
var TaskServiceWrapper = function () {
    var completeAndNotify = function (task) {
        TaskService.complete(task);
        if(task.completed == true) {
            TaskService.setCompleteDate(task);
            TaskService.notifiyCompletion(task, task.user);
            TaskService.save(task);
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }
}();
//normaly you would return the executed funtion
//trying to keep all in one file

var myTask = new Task({
    name: 'my Task',
    priority: 1,
    project: 'Courses',
    user: 'John',
    completed: false
});

/* 
** without Facade **
TaskService.complete(myTask);
if(myTask.completed == true) {
    TaskService.setCompleteDate(myTask);
    TaskService.notifiyCompletion(myTask, myTask.user);
    TaskService.save(myTask);
}
console.log(myTask);
*/

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);