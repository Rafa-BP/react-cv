function Resume({info}) {
    return (
        <div id="resume">
            <h1>{info.name}</h1>
            <h2>Contact Information: </h2>
            <p>{info.email}</p>
            <p>{info.phone}</p>
        </div>
    )
}

export default Resume;