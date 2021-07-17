let bike = {type:"Ducati",model:"Panigale",color:"Red"};
console.log(bike)
const map = new Map(Object.entries(bike));
console.log(map)
const obj = Object.fromEntries(map);
console.log(obj);