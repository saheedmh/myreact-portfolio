

import About from './component/About';
import Contact from './component/Contact';
import Experience from './component/Experience';
import Header from './component/Header';
import Footer from './component/Footer';
import Services from './component/Services';
import Nav from './component/Nav';
import Testimonia from './component/Testimonia';
import Portfolio from './component/portfolio';
function App() {
  return (
    <div className="App">
    
       <Header/>
        <Nav/>
       
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonia/>
        <Contact/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
