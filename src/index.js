import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from  'react-redux';
import rootReducer from './reducers';
import App from './App';
import { fetchGithubData } from './actions/index';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchGithubData());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
