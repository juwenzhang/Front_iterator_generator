const info = {
    names: ["76433", "433", "76"],

    // 开始实现我们的可迭代对象的实现的关键步骤
    [Symbol.iterator](){
        let index = 0
        let flag = false
        return {
            next:() => {
                if (index < this.names.length) {
                    return {
                        done: flag,
                        value: this.names[index++]
                    }
                } else {
                    flag = true
                    return {
                        done: flag,
                        value: this.names[info.names.length - 1]
                    }
                }
            }
        }
    }
}

for(const item of info.names) {
    console.log(item)
}

const names = ["76433", "433", "76"]
console.log(names[Symbol.iterator]().next().done)
console.log(names[Symbol.iterator]().next().value)