import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upload from './components/contact_upload';
import { Action } from './components/loader'
import EditContact from './components/edit_contact';
import Destroy, { destroyAction } from './components/destroy';
function App() {
  return (
    <Routes>
      <Route path="/upload" element={<Upload />} action={Action} />
      {/* Other routes */}
      <Route path="/delete" element={<Destroy />} action={destroyAction} />

      <Route
        path="/contacts/edit"
        element={<EditContact /> }>
      </Route>

    </Routes>
  );
}

export default App;
