import {Routes, Route} from 'react-router-dom';
import NavBanner from './components/NavBanner';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import './index.css'

function App() {

  return (

    <div>

      <NavBanner/>

      <main>


        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/contactme" element={<ContactMe/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectDetails/>}/>
        </Routes>

      </main>

      

      <Footer/>


    </div>

    

     
  )
}

export default App
