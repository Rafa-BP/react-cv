import { useState } from 'react';

function PersonalInfo() {
  const [info, setInfo] = useState({name: "", email: "", phone: "", submited: false})

  function ClickHandler() {
    setInfo({...info,
      submited: !info.submited
    })
  };

  function HandleInput(e) {
    setInfo({...info, 
      [e.target.id]: e.target.value
    })
  };

  return (
    <section>
      {info.submited != false
        ? 
        <>
          <h2>{info.name}</h2>
          <h2>{info.email}</h2>
          <h2>{info.phone}</h2>

          <button onClick={ClickHandler}>Edit</button>
        </>
        :
        <>
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' onChange={HandleInput}/>

          <label htmlFor="email">Email:</label>
          <input type="text" id='email' onChange={HandleInput}/>

          <label htmlFor="phone">Phone:</label>
          <input type="text" id='phone' onChange={HandleInput}/>

          <button onClick={ClickHandler}>Submit</button>
        </>
      }
    </section>
  )
};

export default PersonalInfo