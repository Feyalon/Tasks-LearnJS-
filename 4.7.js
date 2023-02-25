let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();


  
let readMap = new WeakMap();
  
console.log(readMap.set(messages[0], new Date(2017, 1, 1)))