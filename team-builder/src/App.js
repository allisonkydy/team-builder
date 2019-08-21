import React , { useState } from 'react';

import TeamMembers from './TeamMembers';

import './App.css';

function App() {
  const [teamList, setTeamList] = useState([]);

  return (
    <div className="App">
      <TeamMembers teamList={teamList}/>
    </div>
  );
}

export default App;
