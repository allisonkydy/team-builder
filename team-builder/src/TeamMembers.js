import React from 'react';

function TeamMembers(props) {
   if(props.teamList.length === 0) return <p className="placeholder">No members yet!</p>

   return (
      <div className="team-list">
         {props.teamList.map(member => {
            return (
               <div className="member-card" key={member.key}>
                  <h2>{member.name}</h2>
                  <h3>{member.role}</h3>
                  <p className="email">{member.email}</p>
                  <button className="edit-btn" onClick={() => props.changeMemberToEdit(member)}>Edit</button>
                  <button onClick={() => props.deleteMember(member)}>X</button>
               </div>
            )
         })}
      </div>
      
   );
}

export default TeamMembers;
