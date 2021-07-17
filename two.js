const s = new Set()
s.add(15)
s.add(20)
s.add(10)
s.add('Welcome')
s.add({Ana: 22,Jane : 19})
console.log(s)
console.log(s.entries())
console.log(s.has(1))
console.log(s.size)
s.delete(10)
console.log(s.has(10))
for (let item of s) console.log(item)