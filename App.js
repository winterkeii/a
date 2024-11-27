
import { Container } from 'react-bootstrap';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Banner from './Pages/Banner';
import CourseCard from './components/CourseCard';
import Register from './Pages/Register';



function App() {
  return (
    <>
    <AppNavbar/>
    <Container fluid>
    <Banner/>
    <CourseCard/>
    <Register/>
    </Container>
    </>
  );
}

export default App;
