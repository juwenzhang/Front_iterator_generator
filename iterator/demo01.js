const names = ["76433", "433", "76"]

// 开始实现定义我们的一个简单的迭代器
let index = 0
let flag = false
const namesIterators = {
    next() {
        if (index < names.length) {
            return {
                done: flag,
                value: names[index++]
            }
        } else {
            flag = true
            return {
                done: true,
                value: undefined
            }
        }
    }
}


console.log(namesIterators["next"]())
console.log(namesIterators["next"]())
console.log(namesIterators["next"]())
console.log(namesIterators["next"]())