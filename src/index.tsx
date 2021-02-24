import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { makeStore, saveState } from './redux/store';
import reportWebVitals from './reportWebVitals';

const store = makeStore();

store.subscribe(() => {
  saveState({
    palette: store.getState().palette
  });
});

const WithProvider = () => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </Provider>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <WithProvider />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
