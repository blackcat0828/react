import React from 'react';
import ReactDom from 'react-dom';
import App from './App'

const initalData = window.__INITIAL_DATA__;
ReactDom.hydrate(<App pageProps={initialData.page} />, document.getElementById('root'));