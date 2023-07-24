import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Core
import mainRoutes from './core/routes/Root';


const App = () => {
  return (
    <>
      <Suspense fallback="loading">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {
              mainRoutes.map(({ id, path, Component }) => {
                return (
                  <Route
                    key={id}
                    path={path}
                    element={
                      <Component />
                    }
                  />
                )
              })
            }
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App