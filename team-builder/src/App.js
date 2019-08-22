import React , { useState } from 'react';

import TeamMembers from './TeamMembers';
import Form from './Form';

import './App.css';

function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const addTeamMember = member => {
    setTeamList([...teamList, member]);
  }

  const changeMemberToEdit = member => {
    setMemberToEdit(member);
  }

  const editTeamMember = editedMember => {
    const editedList = teamList.map(member => {
      if (editedMember.key === member.key) member = {...editedMember}
      return member;
    })
    setTeamList(editedList);
    setMemberToEdit(null);
  }

  const deleteMember = memberToDelete => {
    const editedList = teamList.filter(member => member !== memberToDelete);
    setTeamList(editedList);
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addTeamMember={addTeamMember} memberToEdit={memberToEdit} editTeamMember={editTeamMember}/>
      <TeamMembers teamList={teamList} changeMemberToEdit={changeMemberToEdit} deleteMember={deleteMember} />
    </div>
  );
}

export default App;
