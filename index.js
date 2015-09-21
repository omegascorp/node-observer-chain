'use strict';

class Observable {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        var that = this;
        this.observers.forEach(function(currentObserver, index) {
            if (currentObserver === observer) {
                that.observers = that.observers.splice(index, 1);
                return false;
            }
        });
    }
    notifyObservers() {
        var args = arguments;
        this.observers.forEach(function(observer) {
            observer.handleEvent.apply(observer, args);
        });
    }
}

class Observer {
    handleEvent() {
    }
}

module.exports.Observable = Observable;
module.exports.Observer = Observer;
