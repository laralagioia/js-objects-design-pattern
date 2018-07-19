var Task = require('./creational');
var Repo = require('./taskRepository');

task1 = new Task(Repo.get(1));

var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');


task1.complete();
task2.save();
task3.save();
task4.save();