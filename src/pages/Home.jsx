import "../styles.css";
import RMU from "../images/RMU.png";
import MOVE from "../images/move.png";
import LUMIA from "../images/lumia.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
 const projects = [
  {title: "Rate My Uni", image: RMU, path: "/projects",},
  {title: "Move it Move it", image: MOVE, path: "/projects",},
  {title: "LUMIA", image: LUMIA, path: "/projects",},
 ];
return (
    
<div className="homePage">
 <header className="homeHeader">
  <h1>Welcome to My Portfolio</h1>
  <h2>Hi, I'm Guillermo Otero.</h2>
 </header>

 <section className="projectsGrid">
  {projects.map((project, index) => (
    <div className="projectCard" key={index}>
     <img src={project.image}/>
     <div className="projectContent">
      <h3>{project.title}</h3>
      <Link to={project.path}>
       <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
        View Project
       </motion.button>
      </Link>
     </div>
    </div>
  ))}
 </section>
</div>
);
}

export default Home;