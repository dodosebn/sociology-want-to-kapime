import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

// Pages and components
import Home from './routeCont/Home';
import NotFoundError from './routeCont/NotFoundError';
import Navbar from './components/navbar/Navbar';
import SignUp from './routeCont/SignUp';
import SignIn from './routeCont/SignIn';
import Dashboard from './routeCont/dashbaord/Dashboard';
import Profile from './routeCont/dashbaord/Profile';
import Submissions from './routeCont/dashbaord/Submissions';
import Messages from './routeCont/dashbaord/Messages';
import Users from './routeCont/dashbaord/Users';
import Footer from './components/footer/Footer';
import FormDetailsPage from './routeCont/FormDetailsPage';
import PostDetailsPage from './routeCont/PostDetailsPage';
import DashboardLayout from './containers/DashboardLayout';
import Forms from './routeCont/Forms';
import Articles from './routeCont/Articles';
import CustomButton from './containers/button/CustomButton';

// Wrapper to add Navbar above pages (for public pages)
const PageWithNavbar = ({ children }) => (
  <>
    <Navbar isSidebarVisible={false} />
    {children}
  </>
);

// Scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Scroll-to-top button component
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <CustomButton
      title=""
      icon={<FaArrowUp size={18} />}
      backgroundColor="#FFD682"
      textColor="#000"
      className="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    />
  );
}

function AppContent() {
  const location = useLocation();

  // Check if current path is dashboard-related (to hide footer)
  const isDashboardRoute = ['/dashboard', '/profile', '/submissions', '/messages', '/users'].some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      <ScrollToTopOnRouteChange />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PageWithNavbar><Home /></PageWithNavbar>} />
        <Route path="/forms" element={<PageWithNavbar><Forms /></PageWithNavbar>} />
        <Route path="/articles" element={<PageWithNavbar><Articles /></PageWithNavbar>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/post-details/:id/:slug" element={<PageWithNavbar><PostDetailsPage /></PageWithNavbar>} />
        <Route path="/form-details/:id/:slug" element={<PageWithNavbar><FormDetailsPage /></PageWithNavbar>} />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
        <Route path="/submissions" element={<DashboardLayout><Submissions /></DashboardLayout>} />
        <Route path="/messages" element={<DashboardLayout><Messages /></DashboardLayout>} />
        <Route path="/users" element={<DashboardLayout><Users /></DashboardLayout>} />

        {/* 404 */}
        <Route path="*" element={<NotFoundError />} />
      </Routes>

      {/* Footer shown only on non-dashboard routes */}
      {!isDashboardRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
      <ScrollToTopButton />
    </Router>
  );
}