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

  console.log("Team List: ", teamList);
  console.log("memberToEdit: ", memberToEdit);

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addTeamMember={addTeamMember} memberToEdit={memberToEdit} editTeamMember={editTeamMember}/>
      <TeamMembers teamList={teamList} changeMemberToEdit={changeMemberToEdit} />
    </div>
  );
}

export default App;
