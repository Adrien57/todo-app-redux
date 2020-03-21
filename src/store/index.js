import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import visibiltyFilterReducer from './visibiltyFilterReducer';
import logMiddleware from './logMiddleware';
import TodoReducer from './todoReducer';

const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.info(error);
    }
};

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

const persistedState = loadStateFromLocalStorage();

const reducers = combineReducers({
    visibilityFilter: visibiltyFilterReducer,
    todos: TodoReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(logMiddleware));
const store = createStore(reducers, persistedState, enhancers);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
