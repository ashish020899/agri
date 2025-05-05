import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import Farmdetials from './Components/Farmdetails/Farmdetails';
import Generalinformation from './Components/General Information/Generalinformation';
import Proof from './Components/Proof/Proof';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Property from './Components/Property/Property';
import Finalstep from './Components/Final Step/Finalstep';
import Investmentopportunities from './Components/Investment Opportunities/Investmentopportunities';
import Credit from './Components/Credit/Credit';
import Mill from './Components/Mill Information/Mill';
import Myprofile from './Components/My Profile/Myprofile';
import Report from './Components/Report/Report';
import Landingpage from './Components/Landing Page/Landingpage';
import Login from './Components/Login/Login';
import BusinessType from './Components/Business Type/BusinessType';
import Loginfarmer from './Components/Login Farmer/Loginfarmer';
// import Trader from './Components/Business Login Forms/Trader/Trader';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/register' element={<Registration/>}/>
        <Route path='/farm-details' element={<Farmdetials/>}/>
        <Route path='/general-information' element={<Generalinformation/>}/>
        <Route path='/proof' element={<Proof/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/property' element={<Property/>} />
        <Route path='/final-step' element={<Finalstep/>} />
        <Route path='/investment-opportunities' element={<Investmentopportunities/>}/>
        <Route path='/credit' element={<Credit/>} />
        <Route path='/mill' element={<Mill/>} />
        <Route path='/my-profile' element={<Myprofile/>} />
        <Route path='/report' element={<Report/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/login-farmer' element={<Loginfarmer/>} />
        <Route path='/business-type' element={<BusinessType/>} />
        {/* <Route path='/trader-info' element={<Trader/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
