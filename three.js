let bike = {type:"Ducati",model:"Panigale",color:"Red"};
console.time('Object');
bike.color;
console.timeEnd('Object');

let usn = new Map();
usn.set('Ram',061);
usn.set('Sita',199);

console.time('Map');
usn.has('Ram');
console.timeEnd('Map');