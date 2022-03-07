function getElement(elem) {
    const element = document.querySelector(elem)
    if(element) {
        console.log(element)
        return element
    } else {
        throw new Error('Please check element name')
    }
}
getElement('.first-counter')

function Counter(elem, value) {
    this.counter = elem;
    this.value = value;
    this.increaseBtn = elem.querySelector('.increase')
    this.decreaseBtn = elem.querySelector('.decrease')
    this.resetBtn = elem.querySelector('.reset')
    this.valueDOM = elem.querySelector('.value')
    this.valueDOM.textContent = this.value

    this.increaseBtn.addEventListener('click', this.increase.bind(this))
    this.decreaseBtn.addEventListener('click', this.decrease.bind(this))
    this.resetBtn.addEventListener('click', this.reset.bind(this))
    
    console.log(this.valueDOM.textContent)
    console.log(this)
}

Counter.prototype.increase = function() {
    this.value++
    this.valueDOM.textContent = this.value
}
Counter.prototype.decrease = function() {
    this.value--
    this.valueDOM.textContent = this.value
}
Counter.prototype.reset = function() {
    this.value = 0
    this.valueDOM.textContent = this.value
}

let firstCounter = new Counter(getElement('.first-counter'), 105)
let secondCounter = new Counter(getElement('.second-counter'), 200)