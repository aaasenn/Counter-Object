class Counter {
    constructor(elem, value) {
        this.counter = elem
        this.value = value
        this.increaseBtn = elem.querySelector('.increase')
        this.resetBtn = elem.querySelector('.reset')
        this.decreaseBtn = elem.querySelector('.decrease')
        this.valueDOM = elem.querySelector('.value')
        this.valueDOM.textContent = this.value
        this.increaseBtn.addEventListener('click', this.increase.bind(this))
        this.decreaseBtn.addEventListener('click', this.decrease.bind(this))
        this.resetBtn.addEventListener('click', this.reset.bind(this))
    }
    increase() {
        console.log(this)
        this.value++
        this.valueDOM.textContent = this.value
        console.log(this)
    }
    decrease() {
        this.value--
        this.valueDOM.textContent = this.value
    }
    reset() {
        this.value = 0
        this.valueDOM.textContent = this.value
    }
}

function getElement(element) {
    const elem = document.querySelector(element)
    if (elem) {
        return elem 
    } else {
        throw new Error('Please check element')
    }
}

let firstCounter = new Counter(getElement('.first-counter'), 100)