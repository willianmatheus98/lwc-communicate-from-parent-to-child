import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {
    // @api counter = 0;

    currentCount = 0;
    priorCount = 0;
    @api
    get counter() {
        return this.currentCount;
    }
    set counter(value) {
        this.priorCount = this.currentCount;
        this.currentCount = value;
    }

    handleIncrement() {
        this.counter++;
    }
    handleDecrement() {
        this.counter--;
    }

    handleMultiply(event) {
        const factor = event.detail;
        this.counter *= factor;
    }

    @api
    maximizeCounter() {
        this.counter += 1000000;
    }
}