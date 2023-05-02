import React from 'react';

const Form = () => {
  return (
    <div className='container' >
      <form action="">
            <h1>Contact Here</h1>
            <input type="text" name='firstname' id="" placeholder='Your name' />
            <input type="text" name='surname' id="" placeholder='Your last name' />
            <input type="email" name='email' id="" placeholder='email' />
            <select id="country" name="country">
               <option value="australia">Australia</option>
               <option value="canada">Canada</option>
               <option value="usa">USA</option>
    </select>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Write something...' />
            <button type='submit' >send</button>

      </form>
    </div>
  )
}

export default Form
