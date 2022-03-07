const firstCounter = new Counter(getElement('.first-counter', 100))
function Counter(elem, value) {
    this.counter = elem
    console.log(value)
    this.value = value
    console.log(this.value)
    this.resetBtn = elem.querySelector('.reset')
    this.increaseBtn = elem.querySelector('.increase')
    this.decreaseBtn = elem.querySelector('.decrease')
    this.valueDOM = elem.querySelector('.value')
    console.log(this.valueDOM.textContent)
    this.valueDOM.textContent = this.value;
    
}
function getElement(selection) {
    const element = document.querySelector(selection)
    if(element) {
        console.log(element)
        return element
    } else {
        throw new Error(`Please check "${selection}"`)
    }
}


Counter.prototype.increase = function() {
    console.log(this)
    this.value++
    this.valueDOM.textContent = this.value
}
Counter.prototype.decrease = function() {
    this.value--
    this.valueDOM.textContent = this.value
}
Counter.prototype.reset = function() {
    this.value = 0
    this.valueDOM = this.value
}






