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