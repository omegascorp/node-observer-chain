'use strict';

class Observable {
    constructor(observableSet, type) {
        this.firstObserver = null;
        this.lastObserver = null;
        this.observableSet = observableSet || null;
        this.type = type || null;
    }
    addObserver(observer) {
        observer.setObservable(this);
        if (this.isEmpty()) {
            this.firstObserver = observer;
            this.lastObserver = observer;
        } else {
            observer.setPrev(this.lastObserver);

            this.lastObserver.setNext(observer);
            this.lastObserver = observer;
        }
    }
    notifyObservers(data) {
        var observer = this.firstObserver;
        while(observer) {
            observer.handleEvent(data);
            observer = observer.getNext();
        }
    }
    setFirstObserver(observer) {
        this.firstObserver = observer;
    }
    setLastObserver(observer) {
        this.lastObserver = observer;
    }
    remove() {
        this.observableSet.remove(this.type);
    }
    isEmpty() {
        return !this.firstObserver && !this.lastObserver;
    }
}

module.exports = Observable;
