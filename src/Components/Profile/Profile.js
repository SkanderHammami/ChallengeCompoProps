import img1 from "../../images/John-Doe.jpg"


const Profile = () => {
return(
    <div>
    <section className="about-me">
    <h1>
      Hello, my name is
      <span className="rotate text-important">John doe</span>,<br />
      and i make horrible websites.
    </h1>
    <img className="avatar" src={img1} alt="jhon-doe" />
  </section>
    </div>
)

}

export default Profile