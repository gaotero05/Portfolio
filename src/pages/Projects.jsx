import "../styles.css";
import { motion } from "framer-motion";

function Projects() {
 return (
  <div>
  <ul className="projectList">
   <li>
    <details>
     <motion.summary whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
      Rate my Uni
     </motion.summary>
      <div className="dropdown-content">
       <a href="https://www.figma.com/proto/OZ6WJWZvRkNUlRpJhhrIfy/Untitled--Copy-?node-id=3-51&t=tGi0iqwrAGiJmFHX-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=72%3A134">Prototype &gt;</a>
       <p id="description">Description: Website used to rate university experience, including courses, teachers and schools themsleves reminiscent of "Rate my Professor." Our version, however, leans more towards the universities and their attributes with comparison features.</p>
       <p>Collaborators: 
        <li>Liam Ortis</li>
        <li>Adrian Cordero</li>
        <li>Bryson Bagett</li>
        <li>Tobi Arogundade</li>
       </p>
      </div>
    </details>
   </li>
   <li>
    <details>
     <motion.summary whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
      Move it Move it
     </motion.summary>
      <div className="dropdown-content">
       <a href="https://www.figma.com/proto/4rxykQRL2wOkYfJhzSI7XH/Untitled?node-id=1-6&starting-point-node-id=1%3A6">Prototype &gt;</a>
       <p id="description">Exercise app prototype depicting the potential layout for such.</p>
      </div>
    </details>
   </li>
   <li>
    <details>
     <motion.summary whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
      LUMIA
     </motion.summary>
      <div className="dropdown-content">
       <a href="https://www.figma.com/proto/RrlrkCn8bPZ6CIE9VPIBkW/DIG3146?node-id=306-307&t=TlLn8CodLAUAHT6O-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=306%3A307&show-proto-sidebar=1">Prototype &gt;</a>
       <p id="description">We aim to harmonize physical and digital realms, immersing the public by bringing an artist's vision to life through a deep emotional connection to static art using AR components.</p>
       <p>Collaborators: 
        <li>Shai</li>
        <li>Angee</li>
        <li>Lauren</li>
        <li>Gabriela</li>
       </p>
      </div>
    </details>
   </li>
  </ul>
  </div>
 );
}

export default Projects;