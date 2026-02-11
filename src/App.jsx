import Header from './components/Header'
import InfoForm from './components/InfoForm'
import Resume from './components/Resume'

import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [info, setInfo] = useState({
        name: "", email: "", phone: "",
        school: "", title: "", studyDate: "",
        company: "", position: "", responsability: "",
        startDate: "", endDate: ""
    })

    useEffect(() => {document.title = "Resume Generator"})

  return (
    <>
      <Header/>
      <InfoForm info={info} setInfo={setInfo}/>
      <Resume info={info} />
    </>
  )
}

export default App