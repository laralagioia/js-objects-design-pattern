var task1 = {};

task1.title = 'My task';
task1.description = 'My description';
task1.toString = function() {
    return this.title + ' ' + this.description;
}
console.log(task1.toString());


var task2 = Object.create(Object.prototype);
task2.title = 'My task';
task2.description = 'My description';

console.log(task2);


var task3 = {
    title: 'My task',
    description: 'My description'
};

task3.toString = function() {
    return this.title + ' ' + this.description;
}
console.log(task3.toString());
