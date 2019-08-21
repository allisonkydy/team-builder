import React from 'react';

function TeamMembers(props) {
   if(props.teamList.length === 0) return <div>No members yet!</div>

   return (
      <div>
         {props.teamList.map(member => {
            return (
               <div key={member.key}>
                  <h1>{member.name}</h1>
                  <h2>{member.role}</h2>
                  <p>{member.email}</p>
               </div>
            )
         })}
      </div>
      
   );
}

export default TeamMembers;
