/**
 * 注意我们如果在生成器函数中使用了我们的 return 语句
 * 那么后面使用生成器函数 next 方法实现获得的值都是 { value: undefined, done: true },
 * 这个就是生成器函数的提前结束的方案一
 * 这里的话有两种实现的方案： 一种是在我们的函数中实现使用，一种是在我们的生成器的使用的时候调用
 * generator.return() | generator.throw()
 *
 * 在我们实现使用生成函数实现接收参数的时候，是在我们的 yield 语句实现接收的
 */

function* Generator() {

    console.log("hello world * 1")
    console.log("hello world * 2")
    const num01 = yield "生成器函数第一次遇到 yield 关键字"

    console.log("hello world * 3", num01)
    console.log("hello world * 4", num01)
    const num02 = yield "生成器函数第二次遇到 yield 关键字"

    console.log("hello world * 5", num02)
    console.log("hello world * 6", num02)
    const num03 = yield "生成器函数第三次遇到 yield 关键字"

    console.log(num03)
}

const generator = Generator()

console.log(generator.next())
/**
 * hello world * 1
 * hello world * 2
 * { value: '生成器函数第一次遇到 yield 关键字', done: false }
 */

console.log(generator.next(1))
/**
 * hello world * 3 1
 * hello world * 4 1
 * { value: '生成器函数第二次遇到 yield 关键字', done: false }
 */

console.log(generator.next(2))
/**
 * hello world * 5 2
 * hello world * 6 2
 * { value: '生成器函数第三次遇到 yield 关键字', done: false }
 */

console.log(generator.next(3))
/**
 * { value: undefined, done: true }
 * 3
 */
