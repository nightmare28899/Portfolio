import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import globalReducer from './reducer/global_reducer';
import './index.css';

const store = configureStore({
    reducer: globalReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
