import React, { useState } from 'react';

function Form() {
   const [member, setMember] = useState({name: "", role: "", email: ""});

   return(
      <form>
         <label htmlFor="name">Name</label>
         <input name="name" type="text" placeholder="name..." value={member.name} />
         <label htmlFor="role">Role</label>
         <input name="role" type="text" placeholder="role..." value={member.role} />
         <label htmlFor="email">Email</label>
         <input name="email" type="email" placeholder="someone@example.com" value={member.email} />
      </form>
   )
}

export default Form;
