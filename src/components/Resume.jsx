function Resume({info}) {
    return (
        <div id="resume">
            <h1>{info.name ? info.name : "Your Name"}</h1>
            <hr />
            <h2>Contact Information: </h2>
            <p>Email: {info.email}</p>
            <p>Phone: {info.phone}</p>
            <hr />
            <h2>Education:</h2>
            <p>School: {info.school}</p>
            <p>Title of Study: {info.title}</p>
            <p>Date of Study: {info.studyDate}</p>
            <hr />
            <h2>Work Experience:</h2>
            <p>Company Name: {info.company}</p>
            <p>Position Title: {info.position}</p>
            <p>Main Responsabilities: {info.responsability}</p>
            <p>From: {info.startDate}</p>
            <p>To: {info.endDate}</p>
        </div>
    )
}

export default Resume;