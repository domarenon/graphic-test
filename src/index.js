import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'


function AppWithCallbackAfterRender() {
  

  return  <App />
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);