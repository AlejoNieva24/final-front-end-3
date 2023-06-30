import { Route, Routes } from "react-router";
import Favs from "./Favs"
import Detail from "./Detail"
import Contact from "./Contact"

function Projects(){
    return(
        <div>
            <h1>Projects</h1>
            <Routes>
                <Route path="favs" element={<Favs/>} />
                <Route path="dentist/:id" element={<Detail/>} />
                <Route path="contact" element={<Contact/>} />
            </Routes>
        </div>
    );
}

export default Projects;