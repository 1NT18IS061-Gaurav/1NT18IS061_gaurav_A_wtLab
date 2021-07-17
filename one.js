let car = new Map();
car.set('Polo','Volkswagen');
car.set('i20','Hyundai');
car.set('Swift','Maruti Suzuki');
car.set('Rapid','Skoda');
car.set('Sunny','Nissan');

console.log(car);
console.log(car.size);
console.log(car.get('Polo'));
console.log(car.has('Rapid'));
console.log(car.values());
console.log(car.keys());
car.delete('Sunny')
console.log(car)