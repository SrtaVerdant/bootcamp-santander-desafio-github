const myMap = new Map();

myMap.set('João', 'Admin');
myMap.set('Carla', 'User');
myMap.set('José', 'User');
myMap.set('Brenda', 'Admin');

function getAdmin(myMap) {
    var admins = [];

    for ([key, value] of myMap) {
        if (value === 'Admin') {
           admins.push(key); 
        }
    }

    return admins;
}

console.log(getAdmin(myMap));