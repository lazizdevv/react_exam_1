import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/main-layout';
import { routes } from './routes/routes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>} >
        {routes.map(({ component: Element, id, path }) => (
          <Route
            index={!path ? true : false}
            path={path}
            key={id}
            element={<Element />}
          />
        ))}
        </Route>
      </Routes>    
    </>
  )
}

export default App