import React , { useState } from 'react';

import TeamMembers from './TeamMembers';
import Form from './Form';

import './App.css';

function App() {
  const [teamList, setTeamList] = useState([]);

  const addTeamMember = member => {
    setTeamList([...teamList, member]);
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addTeamMember={addTeamMember}/>
      <TeamMembers teamList={teamList}/>
    </div>
  );
}

export default App;
