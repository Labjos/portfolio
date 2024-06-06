import Box from "./components/ui/box/Box";
import './App.css';
import Jos from "./components/ui/Jos/Jos";
import Line from "./components/ui/line-time/Line";
import Navbar from "./components/ui/Navbar/Navbar";
import ProjectsList from "./components/projects-list/ProjectsList";


function App() {
  

  return (
    <>
    <div className="section">
      <ProjectsList />
    </div>
    
     <Navbar />
    <div className="home">
      <div>
        <Line />
      </div>
    <div>
      <Box className='box-one' text="STUDIES" />
      <Box className='box-two' text="DRAWING AND DESIGN" />
      <Box className='box-three' text="PROJECT AND SUPERVISE" />
      <Box className='box-four' text="PROJECT, SUPERVISE AND RETURN TO UNIVERSITY" />
      <Box className='box-five' text="MARKETING AND TOURISM ENTREPRENEURSHIPS" />
      <Box className='box-six' text=" IT " />
    </div>
    <div>
      <Jos />
     </div>
    </div>
    </>
    
  )
}

export default App
