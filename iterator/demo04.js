class Personal_Front_iterator {
    constructor(...args) {
        if (args.length > 0) {
            for (let i = 0; i < args.length; i++) {
                this[`${args[i]}`] = args[i + 1]
            }
        }
    }

    // 开始实现我们的实现迭代器的方法
    [Symbol.iterator](property){
        let index = 0
        let flag = false
        let properties = Object.keys(this);
        return {
            next: () => {
                if (index < properties.length) {
                    return {
                        done: flag,
                        value: properties[index++]
                    }
                } else {
                    flag = true
                    return {
                        done: flag,
                        value: undefined
                    }
                }
            },

            return: () => {
                console.log("迭代器已被 break 等关键字中断了...")
                flag = true
                return {
                    done: flag
                }
            }
        }
    }
}

// demo code
const iterator = new Personal_Front_iterator('name', 'width', 'height', 18);
for (const value of iterator) {
    if (value === "height") break
    console.log(value)
}