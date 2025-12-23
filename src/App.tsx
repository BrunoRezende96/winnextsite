import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Header from "./components/header";
import PrivacyWidget from "./components/PrivacyWidget";
import WhatsAppWidget from "./components/WhatsAppWidget";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <WhatsAppWidget/>
      <PrivacyWidget/>
    </Router>
  );
}

export default App;
