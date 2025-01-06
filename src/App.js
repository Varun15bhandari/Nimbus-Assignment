import logo from './logo.svg';
// import './App.css';
import Homepage from './components/Homepage';
import Wedding from './components/Wedding';
import SweetMemories from './components/SweetMemories';
import Attedence from './components/Attendence';
import Address from './components/Address';
import WeddingProgram from './components/WeddingProgram';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Homepage />
        <Wedding />
        <SweetMemories />
        <Attedence />
        <Address />
        <WeddingProgram />
        <Footer />
     
    </div>
  );
}

export default App;
