import { Routes, Route, BrowserRouter} from "react-router-dom"
import './App.css';
import HomePage from "./components/HomePage";
import DivlayoutAuthPage from "./components/DivLayOutAuthPage";
import Login from "./components/Login"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} /> 
      <Route path="/signUp" element={<DivlayoutAuthPage/>} />
      {/* sign up and login page to be rendered here 
      baaki landing page n all homepage wale component se render hore hai.
      */}
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
