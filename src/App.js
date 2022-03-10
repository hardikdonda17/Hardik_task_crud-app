import NavBar from "./Components/NavBar";
import AllEmployee from "./Components/AllEmployee";
import AddEmployee from "./Components/AddEmployee";
import EditEmployee from "./Components/EditEmployee";
import ViewEmployee from "./Components/ViewEmployee";
import NoPage from "./Components/NoPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AllEmployee/>}/>
        <Route index element={<AllEmployee/>} />
        <Route path="AddEmployee" element={<AddEmployee />} />
        <Route path="AllEmployee" element={<AllEmployee />} />
        <Route path="EditEmployee/:id" element={<EditEmployee />} />
        <Route path="ViewEmployee/:id" element={<ViewEmployee />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
