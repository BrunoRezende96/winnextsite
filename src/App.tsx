import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Header from "./components/header";
import PrivacyWidget from "./components/PrivacyWidget";
import WhatsAppWidget from "./components/WhatsAppWidget";
import { Footer } from "./components/Footer";
import { FAQSection } from "./sections/FAQSection";
import Plans from "./sections/Plans";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <WhatsAppWidget/>
      <Plans/ >
      <PrivacyWidget/>
      <FAQSection/>
      <Footer />
    </Router>
  );
}

export default App;
