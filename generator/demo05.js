/**
 * 注意我们的生成器函数的调用时不会直接实现运行的
 * 生成器函数的执行需要通过其实现返回的生成器对象来实现调度
 * 进行调度的话就是通过的时我们的 next 方法实现的调度
 * 当我们实现运行的时候遇到了 yield 的时候直接被停止执行了
 */

function* Generator() {
    console.log("hello world * 1")
    console.log("hello world * 2")
    yield
    console.log("hello world * 3")
    console.log("hello world * 4")
    yield
    console.log("hello world * 5")
    console.log("hello world * 6")
    yield
}

const generator = Generator()

generator.next()
/**
 * hello world * 1
 * hello world * 2
 */

generator.next()
/**
 * hello world * 3
 * hello world * 4
 */

generator.next()
/**
 * hello world * 5
 * hello world * 6
 */