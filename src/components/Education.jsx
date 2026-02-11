import { useState } from 'react';

function Education() {
  const [info, setInfo] = useState({school: "", title: "", date: "", submited: false})

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
          <h2>{info.school}</h2>
          <h2>{info.title}</h2>
          <h2>{info.date}</h2>

          <button onClick={ClickHandler}>Edit</button>
        </>
        :
        <>
          <label htmlFor="school">School:</label>
          <input type="text" id='school' onChange={HandleInput}/>

          <label htmlFor="title">Title:</label>
          <input type="text" id='title' onChange={HandleInput}/>

          <label htmlFor="date">Date:</label>
          <input type="text" id='date' onChange={HandleInput}/>

          <button onClick={ClickHandler}>Submit</button>
        </>
      }
    </section>
  )
};

export default Education