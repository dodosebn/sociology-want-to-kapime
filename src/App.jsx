import {BrowserRouter as Router} from 'react-router-dom';
import {AppContent, ScrollTopTopBtn} from "../utils/appCont";
export default function App() {
  return (
    <Router>
      <AppContent />
      <ScrollTopTopBtn />
    </Router>
  );
}