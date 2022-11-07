import './App.css';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Blog from './components/Blog';
import SingleBlog from './components/Blog/SingleBlog';

function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Blog/>} />
    <Route path='/:slug' element={<SingleBlog/>} />
  </Routes>
</Router>
   

        
  
    
  );
}

export default App;
