import './App.css';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Blog from './components/Blog';
import SingleBlog from './components/Blog/SingleBlog';
import Page1 from './components/Page1';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
   
<Router>
<Navbar/>
  <Routes>
    <Route path='/' element={<Blog/>} />
    <Route path='/:slug' element={<SingleBlog/>} />
    <Route path='/page1' element={<Page1/>} />
    <Route path='/pricing' element={<Pricing/>}/>
  </Routes>
</Router>
   

    </>

        
  
    
  );
}

export default App;
