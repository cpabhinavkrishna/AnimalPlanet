import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import AnimalHome from './page/Animal/AnimalHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/animal" element={<AnimalHome />}>
            <Route path=":animalId" element={<AnimalHome />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
