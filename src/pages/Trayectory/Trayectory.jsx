import Navbar from '../../components/ui/Navbar/Navbar';
import Drawing from './Drawing/Drawing';
import Studies from './Studies/Studies';
import './Trayectory.css';


function Trayectory() {
  return (
    <div>
      <Navbar />
      <Studies />
      <Drawing />
    </div>
  )
}

export default Trayectory;