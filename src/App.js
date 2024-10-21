import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/Mainpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Secondpage from './Pages/Secondpage';
import Feedbackpage from './Pages/Feedbackpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/nextpage' element={<Secondpage/>}/>
      <Route path='/feedback' element={<Feedbackpage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
