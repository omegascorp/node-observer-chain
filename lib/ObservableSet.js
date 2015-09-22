'use strict';

var Observable = require('./Observable.js');

class ObservableSet {
    constructor() {
        this.observables = {};
    }
    addObserver(type, observer) {
        if (!this.observables[type]) {
            this.observables[type] = new Observable(this, type);
        }
        this.observables[type].addObserver(observer);
    }
    notifyObservers(type, data) {
        if (this.observables[type]) {
            this.observables[type].notifyObservers(data);
        }
    }
    remove(type) {
        delete this.observables[type];
    }
}

module.exports = ObservableSet;
