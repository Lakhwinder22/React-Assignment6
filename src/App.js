import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import Student from './Component/Student';
import Contact from './Component/Contact';
import NavBar from './Component/NavBar';
import Detail from './Component/Detail';
import AddStudent from './Component/AddStudent';
function App() {
 return (

  <Detail>
  
    <div className="App">


<BrowserRouter>

<NavBar />

<Routes>

<Route path='/home' element={<Home />} />
<Route path='/student' element={<Student />} />
<Route path='/contact' element={<Contact />} />
<Route  path='/add-student' element={<AddStudent />}/>


</Routes>

</BrowserRouter>


     
    </div>
    </Detail>
  );
 
}

export default App;