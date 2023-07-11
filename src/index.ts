import { User } from "./models/user";

const user = new User({name: 'myname', age: 38});

user.set({name: 'newName', age: 45});

console.log(user.get('name'))
console.log(user.get('age'))