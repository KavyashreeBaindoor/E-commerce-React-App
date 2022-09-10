import React from 'react'
import { useState } from 'react'

const form={
         name:"",
         email:"",
         passowrd:"",
         confirmpass:""
}

const Signupform = () => {
         const [formItems,setFormItems]=useState(form)
         const {name,email,password,confirmpass}=formItems

 const changeHandler=(e)=>{
const {name,value}=e.target;
setFormItems({...formItems,[name]:value})
         }
  return (
   <>
   <div>
         <h1>signup</h1>
         <form action="">

         <label htmlFor="name">Name</label>
         <input type="text" required onChange={changeHandler} name="name" value={name} id="name"/>

         <label htmlFor="email">Email</label>
         <input type="email" required onChange={changeHandler} name="email" value={email} id="email"/>

         <label htmlFor="pass">Password</label>
         <input type="password" required onChange={changeHandler} name="password" value={password} id="pass"/>

         <label htmlFor="con">Confirm Password</label>
         <input type="passowrd" required  onChange={changeHandler} name="confirmpass" value={confirmpass} id="con"/>

         <button type="submit">Submit</button>

         </form>
   </div>
   
   </>
  )
}

export default Signupform