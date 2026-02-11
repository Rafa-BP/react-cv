
function InfoForm({info, setInfo}) {

    function HandleChange(e) {
        setInfo({
            ...info,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div id='form'>
            <h2 id="infoTitle">Please Input Your Information</h2>

            <h3>Personal Information</h3>

            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" onChange={HandleChange}/>

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" onChange={HandleChange}/>

            <label htmlFor="phone">Your Phone:</label>
            <input type="number" id="phone" onChange={HandleChange}/>
            
            <br />

            <h3>Education</h3>

            <label htmlFor="school">School Name:</label>
            <input type="text" id="school" onChange={HandleChange}/>

            <label htmlFor="title">Title of Study:</label>
            <input type="text" id="title" onChange={HandleChange}/>

            <label htmlFor="studyDate">Date:</label>
            <input type="date" id="studyDate" onChange={HandleChange}/>

            <br />

            <h3>Experience</h3>

            <label htmlFor="company">Company Name:</label>
            <input type="text" id="company" onChange={HandleChange}/>

            <label htmlFor="position">Position Title:</label>
            <input type="text" id="position" onChange={HandleChange}/>

            <label htmlFor="responsability">Main Responsabilities:</label>
            <textarea id="responsability" onChange={HandleChange}/>

            <div id="dateContainer">
                <div id="dateCol">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" id="startDate" className="dateCustom" onChange={HandleChange}/>
                </div>
                <div id="dateCol">
                    <label htmlFor="endDate">End Date:</label>
                    <input type="date" id="endDate" className="dateCustom" onChange={HandleChange}/>
                </div>
            </div>

        </div>
    );
};

export default InfoForm;