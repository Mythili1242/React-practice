import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Index from './components/Drawer/Index';
import InboxCode from './components/Drawer/Inbox/InboxCode';
import SendCode from './components/Drawer/SendEmail/SendCode';
import Dash from './components/Drawer/DashBoard/Dash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />}>
          <Route path='/inbox' element={<InboxCode />}></Route>
          <Route path='/send' element={<SendCode />}></Route>
          <Route path="/dash" element={<Dash />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;