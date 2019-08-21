import React , { useState } from 'react';

import TeamMembers from './TeamMembers';
import Form from './Form';

import './App.css';

function App() {
  const [teamList, setTeamList] = useState([]);

  return (
    <div className="App">
      <TeamMembers teamList={teamList}/>
      <Form />
    </div>
  );
}

export default App;
