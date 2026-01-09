
      

import { useState } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Loader from "./loader/Loading";
import Hero from '../Hero';
import Home from "./Home";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Education from "./Edu";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={loading ? (<Loader onFinish={() => setLoading(false)} />) : ( <Portfolio/> )} />
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
