// 开始实现定义我们的通用的迭代器
function createArrayIterator(arr) {
    let index = 0
    let flag = false
    return {
        next() {
            if (index < arr.length) {
                return {
                    done: flag,
                    value: arr[index++]
                }
            } else {
                flag = true
                return {
                    done: flag,
                    value: undefined
                }
            }
        }
    }
}

const names = ["76433", "433", "76"]

const array_iterators = createArrayIterator(names)
console.log(array_iterators.next())
console.log(array_iterators.next())
console.log(array_iterators.next())
console.log(array_iterators.next())
console.log(array_iterators.next())