import React from 'react'
import ReactDOM from 'react-dom/client'
import {TestComponent, TestComponent2} from "./lib";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <TestComponent />
      <TestComponent2 />
  </React.StrictMode>,
)
