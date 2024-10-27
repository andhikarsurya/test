// import Button from "../components/button";
function AboutPage(){
    // let text :string = "Welcome to my portofolio";
    return(
        <>
          <table className="about">
            <tr>
                <td colSpan={3} className="b">
                    <div className="profile">PROFILE</div>
                    <div className="profiletext">I'm creative multitasking developer</div>
                </td>
            </tr>
            <tr>
                <td className="b">
                    <div className="aboutme">About me</div>
                    <div className="aboutme_">I am a fervent C++ cult member, wielding my compiler like a warrior wields their sword. I've spent countless hours in the trenches of code, battling bugs and undefined behavior, emerging victorious and ever more resilient. My allegiance to C++ is unwavering, and I bear the standard of its versatility and performance proudly.</div>
                </td>
                <td className="b">c</td>
                <td className="b">d</td>
            </tr>
          </table>
        </>
    )
}
export default AboutPage