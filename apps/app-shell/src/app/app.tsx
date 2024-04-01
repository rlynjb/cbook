import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { Header } from '@cbook/ui';

const Intro = React.lazy(() => import('intro/Module'));
const Uids = React.lazy(() => import('uids/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div style={{ marginTop: '5rem'}}>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/uids" element={<Uids />} />
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
