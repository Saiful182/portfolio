
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>

      <BrowserRouter>

        <Home></Home>

      </BrowserRouter>

    </div>

  );
}

export default App;
