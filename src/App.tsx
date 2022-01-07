import { Routes, Route} from "react-router-dom";
import Details from "./components/pages/Details";
import MainPage from './components/pages/MainPage/index';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
