import React from 'react';
import './App.css';
import 'tachyons'
import ThingPage from '../../pages/ThingPage';
import TeaUrn from '../TeaUrn';

function App () {
  return (
    <div className="App">
      <header className='f2 pa3 b purple'>
        Library of Things
      </header>
      <ThingPage>
        <TeaUrn />
      </ThingPage>
    </div>
  );
}

export default App;
