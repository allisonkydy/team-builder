import React from 'react';

function TeamMember(props) {
   return (
      <div>
         {props.teamList.map(member => (
            <div>
               <h1>{member.name}</h1>
               <h2>{member.role}</h2>
               <p>{member.email}</p>
            </div>
         ))}
      </div>
      
   );
}

export default TeamMember;
