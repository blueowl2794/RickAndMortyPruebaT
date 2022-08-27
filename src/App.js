import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Detail from './views/Detail';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ={"/"} element={<Main/>}/>
          <Route path ={"/:id"} element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
