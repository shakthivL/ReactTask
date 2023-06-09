  import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactList from './Component/ContactList';
import ChartsAndMaps from './Component/ChartsandMaps';

const Sidebar  = React.lazy(() => import('./Component/Sidebar'));
const Contact  = React.lazy(() => import('./Component/Contact'));


function App() {
  return (
    <div className="App">
       <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <Sidebar />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense fallback={<>...</>}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          path="contactlist"
          element={
            <React.Suspense fallback={<>...</>}>
              <ContactList />
            </React.Suspense>
          }
        />
        <Route
          path="charts"
          element={
            <React.Suspense fallback={<>...</>}>
              <ChartsAndMaps />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
