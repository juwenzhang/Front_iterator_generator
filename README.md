### 该部分就是我们的迭代器(iterator) 和 生成器(Generator) 的简单使用


#### iterator 迭代器的基本使用
* 迭代器就是实现是在可迭代对象中实现可以使用 `for 循环` 实现遍历的访问元素的一种对象
  * 迭代器类似于我们数据库中的光标一般，让一个可迭代对象中的每个数据实现可以通过这种光标实现访问
  * 迭代器就是实现的是我们的快速的访问我们容器的每个元素
  * 迭代器的实现必须满足特定的要求： 就是必须含有一个方法在自定义的容器中，就是我们的 next 方法
  * 但是我们的 next 方法又具有其他的要求：
    * 是一个无参数或者说有参数的函数，返回值应该具备两个属性的对象
    * done(Boolean)
      * 如果迭代器可以产生序列中的写一个值，那么这个值就是我们的 false
      * 如果是将迭代器序列迭代完毕的话，就是 true
    * value
      * 迭代器实现返回的具体的数据

* 可迭代对象
  * 如何实现我们的可迭代对象呐？？？
  * 首先先实现定义一个函数名为: `[Symbol.iterator]`
  * 同时函数本身返回一个迭代器函数
  * 可迭代对象可以实现进行的操作含有我们的
    * 使用 for...of 操作
    * 同时为了提高我们的通用性，合理的使用箭头函数和 this 的使用
  * 下面的代码就是我们向一个不可迭代中实现迭代对象实现的基本的思路
```javascript
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
```

* 可迭代对象可以进行的操作含有
  * 进行实现我们的 for...of...的遍历操作
  * 用来实现创建一些实例对象的实例 `new Map([iterable_obj])` `new WeakSet([iterable_obj])` 等等的操作
  * 同时还具有的一些方法的调用 `Promise.all(iterable_obj)` 等等  

* JavaScript 中原生的可迭代对象
  * `String` `Array` `Map` `Set` `argument对象` `NodeList节点`

#### 实现我们的自己的自定义一个通用的实现迭代器的方法类
```javascript
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
```

***
***

#### Generator 生成器的基本使用
* 生成器的概念(注意我们的生成使用的最多的场景就是我们的在 `react 的 redux` 状态管理库 中使用的十分多的)
  * 生成器就是一种用来控制**函数使用**的一种方案，生成器可以实现的是我们的便捷的控制我们函数的继续执行以及停止执行
  * 书写生成器函数的注意事项
    * 生成器函数的实现就是在我们的 `function` 字段的后面添加一个操作符 `*`
    * 生成器函数的实现书写的话，是可以通过我们的 `yield` 关键字来实现控制函数的执行流程的
    * 生成器函数实现的时候，其返回值是一个生成器 `Generator（生成器）`
      * 生成器的话实际上就是一种十分特殊的迭代器，只是我们迭代器的一种变形罢了


* 生成器函数的话实际上的话，内部是具有我们的 next 方法的
  * 这个 next 就是我们的 { done:false | true , value: yield_value | undefined}


* 生成器实际上的话是可以直接替代我们的迭代器的

**开始实现对上面的生成器函数实现优化**

```javascript
function createArrayIterator_by_generator(arr) {
    function* Generator() {
        for (let i = 0; i < arr.length; i++) {
            yield arr[i]
        }
    }

    const generator = Generator()

    for (let i = 0; i < arr.length; i++) {
        console.log(generator.next().value)
    }
}


const arr = [1, 2, 3, 4, 5]
createArrayIterator_by_generator(arr)
```

* 同时我们还可以使用 yield 的语法糖形式对上面的代码再进行优化简化 `yield*`
```javascript
function createArrayIterator_by_generator(arr) {
  function* Generator() {
    // 使用 yield 语法糖实现深入的简化
    yield* arr
  }

  const generator = Generator()

  for (let i = 0; i < arr.length; i++) {
    console.log(generator.next().value)
  }
}

const arr = [1, 2, 3, 4, 5]
createArrayIterator_by_generator(arr)
```

* 通过生成器优化前面实现的 class 迭代器
```javascript
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
```