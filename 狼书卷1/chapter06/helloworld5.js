function say(person) {
    console.log('i an say hello world to ' + person);
}

function eat(food) {
    console.log('i an eat ' + food);
}

exports.eat = eat;
exports.say = say