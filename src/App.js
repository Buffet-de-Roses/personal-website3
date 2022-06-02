import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Switch from './components/switch';
import { workTime } from './components/helper';

function App() {
  const [workHour, setWorkHour] = useState(false);

  const passData = (data) => {
    setWorkHour(data);
    console.log(workHour);
  }

  useEffect(() => {
    setWorkHour(workTime());
  }, []);

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home work={workHour} />}></Route>
          <Route exact path='/profile' element={<Profile work={workHour}/>}></Route>
        </Routes>
      </Router>
      <Switch work={workHour} passData={passData} className='switch'/>
    </div>
  );
}

export default App;
