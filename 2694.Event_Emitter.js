class EventEmitter {
    constructor() {
        this.events = new Map()
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        let subscription = this.events.get(eventName);

        subscription.push(callback);

        return {
            unsubscribe: () => {
                const index = subscription.indexOf(callback);
                console.log(index);
                subscription.splice(index, 1);
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const emittedEvent = this.events.get(eventName);

        if (!emittedEvent) {
            return [];
        }

        return emittedEvent.map(cb => {
            return cb(...args);
        })
    }
}


const emitter = new EventEmitter();

 // Subscribe to the onClick event with onClickCallback
 function onClickCallback() { return 99 }
 const sub = emitter.subscribe('onClick', onClickCallback);
 const sub2 = emitter.subscribe('onClick1', onClickCallback);
 sub.unsubscribe();
 let res = emitter.emit('onClick'); // [99]
 console.log(res);
 sub.unsubscribe(); // undefined
 emitter.emit('onClick'); // []