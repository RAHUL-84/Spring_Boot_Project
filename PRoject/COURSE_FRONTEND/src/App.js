import './App.css';
import { Container, Row, Col } from "reactstrap";
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Headers from './components/Headers';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/about';
import UpdateCourse from './components/UpdateCourse';  // ✅ added

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container className='text-center'>
          <Headers />
          <Row>
            <Col md={4}><Menus /></Col>
            <Col md={8}>
              <Routes>
                <Route path='/home' element={<Home />} exact />
                <Route path='/add-course' element={<AddCourse />} exact />
                <Route path='/courses' element={<Allcourses />} exact />
                <Route path='/update-course/:id' element={<UpdateCourse />} exact /> {/* ✅ route added */}
                <Route path='/about-us' element={<About />} exact />
                <Route path='/contact-us' element={<Contact />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
