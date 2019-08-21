import React, { useState, useEffect } from 'react';

function Form(props) {
   const [member, setMember] = useState({name: "", role: "", email: ""});

   const handleChange = event => {
      setMember({...member, [event.target.name]: event.target.value});
   }

   const submitForm = event => {
      event.preventDefault();
      const newMember = {
         ...member,
         key: Date.now()
      };
      props.addTeamMember(newMember);
      setMember({name: "", role: "", email: ""});
   }

   useEffect(() => {
      setMember(props.memberToEdit)
   }, [props.memberToEdit])

   return(
      <form onSubmit={submitForm}>
         <label htmlFor="name">Name</label>
         <input name="name" type="text" placeholder="name..." value={member.name} onChange={handleChange} />
         <label htmlFor="role">Role</label>
         <input name="role" type="text" placeholder="role..." value={member.role} onChange={handleChange} />
         <label htmlFor="email">Email</label>
         <input name="email" type="email" placeholder="someone@example.com" value={member.email} onChange={handleChange} />
         <button type="submit">Add Team Member</button>
      </form>
   )
}

export default Form;
