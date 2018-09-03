import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from 'react-redux';
import store from './Store/store';
import configureStore from './Store/configureStore';
import DevTools from './containers/DevTools';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
