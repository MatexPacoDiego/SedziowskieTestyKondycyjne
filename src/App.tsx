import HomePage from "./views/HomePage/HomePage";
import B_AKlasa from "./views/RefereeTests/B_AKlasa/B_AKlasa";
import Okregowa_IVLiga from "./views/RefereeTests/Okregowa_IVLiga/Okregowa_IVLiga";
import III_ILiga from "./views/RefereeTests/III_ILiga/III-ILiga";
import Ekstraklasa from "./views/RefereeTests/Ekstraklasa/Ekstraklasa";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function onSwitchMenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className={styles.container}>
      <main>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<HomePage isOpen={isOpen} onSwitchMenu={onSwitchMenu} />}
            />
            <Route path="/B_AKlasa" element={<B_AKlasa />} />
            <Route path="/Okregowa_IVLiga" element={<Okregowa_IVLiga />} />
            <Route path="/III_ILiga" element={<III_ILiga />} />
            <Route path="/Ekstraklasa" element={<Ekstraklasa />} />
          </Routes>
        </Router>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
