import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import { routes } from './routes';
import './App.css'
import React from 'react';

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={React.createElement(element)} />
        ))}
      </Routes>
    </>
  )
}

export default App
