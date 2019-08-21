import React , { useState } from 'react';

import TeamMembers from './TeamMembers';
import Form from './Form';

import './App.css';

function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

  const addTeamMember = member => {
    setTeamList([...teamList, member]);
  }

  const editTeamMember = member => {
    setMemberToEdit(member);
  }

  console.log(memberToEdit);

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addTeamMember={addTeamMember} memberToEdit={memberToEdit} />
      <TeamMembers teamList={teamList} editTeamMember={editTeamMember} />
    </div>
  );
}

export default App;
