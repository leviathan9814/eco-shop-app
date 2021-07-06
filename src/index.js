import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
