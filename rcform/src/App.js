import React, { useState } from 'react'

function App() {
  const[formData,setformData] = useState({firstname:"",lastname:"",email:"",isvisible:false,mode:"",favcar:""});
  // console.log(formData);
  function changeHandler(e){
    const {name,type,value,checked} = e.target
    setformData(prevFormData=>{
      return {
      ...prevFormData,
      // [e.target.name]:e.target.value
      [name]:type=== "checkbox"?checked:value
      }
        
    });
  }
  function submitHandler(e){
    e.preventDefault();
    console.log("finally submitting the entire data of form......")
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder ="Enter Firstname"
          onChange={changeHandler}
          name='firstname'
          value={formData.firstname}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder ="Enter LastName"
          onChange={changeHandler}
          name='lastname'
          value={formData.lastname}
        />
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder ="Enter Email.."
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />
        <br></br>
        <br></br>
        <textarea
          type="text"
          placeholder ="Enter something."
          onChange={changeHandler}
          name='textarae'
          value={formData.textarea}
        />
        <br></br>
        <br></br>

        <input
        type='checkbox'
        onChange={changeHandler}
        name='isvisible'
        id='isvisible'
        checked={formData.isvisible}
        />
        <label htmlFor='isvisible'>Am i visible ?</label>
        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="onlinemode"
          id="onlinemode"
          checked={formData.mode==="onlinemode"}

        />
        <label htmlFor='onlinemode'>onlinemode</label>
        <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="offlinemode"
          id="offlinemode"
          checked={formData.mode==="offlinemode"}

        />
        <label htmlFor='offlinemode'>offlinemode</label>
        <br></br>
        <label htmlFor='favcar'>select your fav car</label>

        <select name='favcar'
        id='favcar'
        value={formData.favcar}
        onChange={changeHandler}>
        <option value="scorpio">scorpio</option>
        <option value="BMW">BMW</option>
        <option value="AUDI">AUDI</option>
        <option value="JAGUAR">JAGUAR</option>

        </select> 
        <br></br>
        <button>submit</button>

      </form>
    </div>
  )
}

export default App


