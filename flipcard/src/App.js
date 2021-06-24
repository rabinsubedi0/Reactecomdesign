import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Down from './Component/Navbar/Down';
import Contact from './Component/Contactus/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Down/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;
