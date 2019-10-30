import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/appContainer';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer';

// простой способ включения devtools
// необходимо установить расширение браузера: https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// оборачиваем App в Provider, передаём Store
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
