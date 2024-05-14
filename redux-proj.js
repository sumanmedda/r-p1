// Redux has 4 funcs - : Store(a), Reducer(b), Subscribe(c), Action(d)
//  Importing Redux
const redux = require('redux');

// Setting Initial value of counter
const INITIAL_VALUE = {
    counter: 0
}

// == (b) == //
// Setting initial value in reducer store and then
// checking action and preforms functions according
// to actions
const reducer = (store = INITIAL_VALUE, action) => {
    if (action.type === 'INCREMENT') {
        store =  {counter : store.counter + 1}
    }else if (action.type === 'DECREMENT') {
        store =  {counter : store.counter - 1}
    }else if (action.type === 'ADDITION') {
        store =  {counter : store.counter + action.payload.number}
    }
    return store;
}

// == (a) == //
// creating store which keeps reducer
const store = redux.createStore(reducer);

// == (c) == //
// Subscriber function which prints state
const subscriber = () => {
    const state = store.getState()
    console.log(state);
}

// Subscribing to store
store.subscribe(subscriber);

// == (d) == //
// Executing Redux - Subscribers
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'ADDITION', payload:{number: 8}});
store.dispatch({type: 'DECREMENT'});


