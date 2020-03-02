import React from 'react';
import './index.css';
import { Provider } from "react-redux"
import store from "../../sotre";

function App() {
  return (
    <Provider store={store}>
      <div className="App">test</div>
    </Provider>
  );
}

export default App;
