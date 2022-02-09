import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import './App.css';
import Projects from './Components/Projects/Projects';
import img2 from "./images/proj1.jpg"
import img3 from "./images/proj2.jpg"
import img4 from "./images/proj3.jpg"
import img5 from "./images/proj4.jpg"
import Cards from './Components/Cards/Cards';
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer"
function App() {

  
  

  return (
    <div className="body">
        <Navbar/>
        <Profile/>
        <div className='projects'>
        <div  className="projects-container">
         <Projects/>
          <Cards imgUrl = {img2} title = "PROJECT 1" paragraph ="Lorem jfkdsjkfj kksfncnzeuiizd;fdf" linkButton = "#"  />
          <Cards imgUrl = {img3} title = "PROJECT 2" paragraph ="Lorem jfkdsjkfj kksfncnzeuiizd;fdf" linkButton = "#"  />
          <Cards imgUrl = {img4} title = "PROJECT 3" paragraph ="Lorem jfkdsjkfj kksfncnzeuiizd;fdf" linkButton = "#"  />
          <Cards imgUrl = {img5} title = "PROJECT 4" paragraph ="Lorem jfkdsjkfj kksfncnzeuiizd;fdf" linkButton = "#"  />
        </div>
        </div>
        <Contact/>
        <Footer/>
    
          </div>
  );
}

export default App;
