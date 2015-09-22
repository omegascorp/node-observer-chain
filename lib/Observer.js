'use strict';

class Observer {
    constructor(observable, prev, next) {
        this.prev = prev || null;
        this.next = next || null;
        this.observable = observable || null;
    }
    setNext(observer) {
        this.next = observer;
    }
    getNext() {
        return this.next;
    }
    setPrev(observer) {
        this.prev = observer;
    }
    getPrev() {
        return this.prev;
    }
    setObservable(observable) {
        this.observable = observable;
    }
    getObservable() {
        return this.observable;
    }
    remove() {
        if (this.next) {
            this.next.setPrev(this.prev);
        } else {
            this.observable.setLastObserver(this.prev);
        }
        if (this.prev) {
            this.prev.setNext(this.next);
        } else {
            this.observable.setFirstObserver(this.next);
        }
        if (this.observable && this.observable.isEmpty()) {
            this.observable.remove();
        }
        delete this;
    }
    handleEvent() {
    }
}

module.exports = Observer;
