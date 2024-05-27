import {Header, Blog, Footer, Features, Possibility, WhatGPT3} from './containers'
import {Navbar, Brand, CTA} from './components';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Plans from './containers/plans/Plans';
import Contact from './containers/contact/Contact';
import Overview from './containers/overview/Overview';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path='/' element={<>
          <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
          <Brand/>
          <WhatGPT3/>
          <Features/>
          <Possibility/>
          <CTA/>
          <Blog/>
          <Plans/>
          <Footer/>
        </>}/>
        <Route path='/contact' element={<>
          <Contact/>
        </>}/>
        <Route path='/overview' element={<>
          <Overview/>
        </>}/>
        </Routes>      
      </Router>
    </div>
  )
}

export default App;
