class Personal_Front_iterator {
    constructor(...args) {
        if (args.length > 0) {
            for (let i = 0; i < args.length; i++) {
                this[`${args[i]}`] = args[i + 1]
            }
        }
    }

    // 使用生成器函数实现优化
    *[Symbol.iterator](){
        let properties = Object.keys(this);
        yield* properties
    }
}

// demo code
const iterator = new Personal_Front_iterator('name', 'width', 'height', 18);
for (const value of iterator) {
    if (value === "height") break
    console.log(value)
}