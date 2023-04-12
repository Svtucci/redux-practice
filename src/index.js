import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const personName = (state = 'Chris', action) => {
    // Always check the action.type before changing our value
    if (action.type === 'SET_PERSON_NAME') {
        // This changes the value of our reducer
        return action.payload;
    }
    // Value of our reducer remains unchanged
    return state;
}

const allPeople = (state = [], action) => {
    if (action.type === 'ADD_PERSON_NAME') {
        // return a new array with existing items PLUS the new item
        return [...state, action.payload];
        // basically the same as state.push(action.payload);
    }
    return state;
}

const activityType = (state='', action) => {
    if (action.type === 'SET_ACTIVITY_TYPE') {
        return action.payload; 
    }
    return state;
}

const allActivity = (state = [], action) => {
    if (action.type === 'ADD_ACTIVITY_TYPE') {
        return [...state, action.payload]
    }
    return state; 
}

const timeLength = (state = 0, action) => {
    if (action.type === 'ADD_TIME') {
        return action.payload;
    }
    return state; 
}

const allTimes = (state = [], action) => {
    if (action.type === 'SET_ACTIVITY_TIME') {
        return [...state, action.payload]
    }
    return state;
}




const storeInstance = createStore(
    combineReducers(
        {
            personName,
            allPeople,
            activityType, 
            allActivity, 
            timeLength, 
            allTimes
            // Other reducers go here
        }
    ),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
