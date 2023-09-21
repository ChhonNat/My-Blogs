import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';

// Import only the components you intend to use
const MyHeader = lazy(() => import('./pages/MyHeader'));
const Home = lazy(() => import('./pages/Home'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Contact = lazy(() => import('./pages/Contact'));
const MyFooter = lazy(() => import('./pages/MyFooter'));


function App() {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const delay = 2000;

    const tmptimeOut = setTimeout(() => {
      setIsLoad(false);
    }, delay);

    return () => {
      clearTimeout(tmptimeOut);
    }
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <MyHeader />
          
          {
            isLoad ? (
              <Loading />
            ) : (
              <>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path='/blogs' element={<Blogs />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <MyFooter />
              </>
            )
          }

        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
