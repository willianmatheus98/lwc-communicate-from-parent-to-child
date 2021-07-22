import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {

    factors = [0,4];

    handleAdd() {
        console.log('add 1');
        this.dispatchEvent(new CustomEvent('add'));
    }

    handleSubtract() {
        console.log('sub 1');
        this.dispatchEvent(new CustomEvent('subtract'));
    }

    handleMultiply(event) {
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('multiply', {
            detail: factor
        }));
    }
}