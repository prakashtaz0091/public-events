import { Route, Routes } from 'react-router-dom';
import React from 'react'


import FirstSection from './components/firstSection/FirstSection'
import Events from './components/events/Events';
import PageNotFound from './components/pageNotFound/PageNotFound';

const App = () => {
  return (
    <>
      <div className="background"></div>

      <Routes>
        <Route  path="/" element={<FirstSection />} />
        <Route path="events/:location" element={<Events />} />
        <Route path="*" element={<PageNotFound />} />


      </Routes>
    </>

  )
}

export default App