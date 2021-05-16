import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hey!</div>;
};

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root-app')
);
