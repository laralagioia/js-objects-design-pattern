/* Object.defineProperty(obj, 'name', {
    value: 'my name',
    writable: true, // if it can be changed
    enumerable: true, // show or not in keys or for loops
    configurable: true // change the configuration of the items
})
*/

var task = {
    title: 'My task',
    description: 'My description'
};

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(task.toString());


//if enumerable is false, toString won't show
console.log(Object.keys(task));

//if configurable is false, it won't perform the following change
Object.defineProperty(task, 'toString', {
    configurable: false
});
