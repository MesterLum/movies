import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default () => {
    let store = createStore(reducers, applyMiddleware(thunk));
    return store;

}