import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Home from './Home';
import About from './About';
import Contact from './Contact';

// Contains the value and text for the options
const languages = [
    { value: "", text: "Options" },
    { value: "en", text: "English" },
    { value: "pt", text: "Português" },
];

function App() {
    // It is a hook imported from 'react-i18next'
    const { t } = useTranslation();
    const [lang, setLang] = useState("en");

    // This function put query that helps to
    // change the language
    const handleChange = (e) => {
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(
            loc + "?lng=" + e.target.value
        );
    };

  return (
    <Router>
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">{t("home") || "Home"}</Link>
            </li>
            <li>
              <Link to="/about">{t("about") || "About"}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact") || "Contact"}</Link>
            </li>
          </ul>
          
          {/* Language selector */}
          <div className="language-selector">
            <label>{t("choose") || "Choose Language"}</label>
            <select value={lang} onChange={handleChange}>
              {languages.map((item) => {
                return (
                  <option
                    key={item.value}
                    value={item.value}
                  >
                    {item.text}
                  </option>
                );
              })}
            </select>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
