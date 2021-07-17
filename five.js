function intersection(X,Y) {
    let result = new Set()
    for (let elem of Y)
    {
        if (X.has(elem)) {
            result.add(elem)
        }
    }
    return result
}
const X = new Set([11, 22 ,33 ,44])

const Y = new Set([33, 44 ,55 ,66])
let union = new Set([...X, ...Y]);
console.log(union)
console.log(intersection(X, Y))