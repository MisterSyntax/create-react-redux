//React dependencies
import React from 'react'
import { render } from 'react-dom'
//Redux dependencies
import { Provider } from 'react-redux'
import storeFactory from './store/'
//sampleData
import sampleData from './initialState.json'
//Import Main Container
import App from './containers/App/'
import { BrowserRouter } from 'react-router-dom'
//import root style
import './index.css';

import registerServiceWorker from './registerServiceWorker';

//Setting up load data and save state
const initialState = (localStorage['app-store']) 
        ? JSON.parse(localStorage['app-store']) 
        : sampleData

const saveState = () => localStorage['app-store'] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
store.subscribe(saveState)

//For debugging purposes we expose the store
window.store = store

render(    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
