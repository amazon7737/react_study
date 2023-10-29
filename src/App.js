import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import RootLayout from './Layouts/RootLayout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route element = {<RootLayout/>}>
              <Route path="/" element={<Main/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
