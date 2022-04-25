import './categories.styles.scss';
import Directorycomponent from './components/directory/directory.component';
import {Route,Routes} from 'react-router-dom'
import Navigation from './routes/home/navigation';
import Signin from './routes/signin/Signin';
function App() {

  
  const Shop=()=>{
    return(
      <h1>I am the shop</h1>
    )
  }
  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
          <Route index  element={<Directorycomponent/>}/>
          <Route  path="/shop" element={<Shop/>}/>
          <Route  path="/signin" element={<Signin/>}/>
      </Route>
       
    </Routes>
  
  );
}

export default App;
