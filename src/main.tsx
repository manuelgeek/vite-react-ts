import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Provider} from "react-redux";
import { store } from './store';
import {Home} from "./views/Home";
import {About} from "./views/About";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route element={<App />}>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
