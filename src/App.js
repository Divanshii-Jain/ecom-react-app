import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Layout from './Components/Layouts/Layout';
// import SignUp from './Components/Pages/SignUp';
// import Header from './Components/Pages/Header';
import LearnHooks from './Components/Modules/LearnHooks';
import Products from './Components/Modules/Products';
import Add from './Components/Pages/Admin/Category/Add';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route path='/header' element={<Header/>}/> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path='/signup' element={<SignUp />} /> */}
          <Route path='/learnhooks' element={<LearnHooks/>} />
        </Route>
      </Routes>
      <Products/>
      <Add />
    </BrowserRouter>
  );
}

export default App;
