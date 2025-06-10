import { useState, useEffect, Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
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
import Forms from './routeCont/Forms';
import Articles from './routeCont/Articles';
import CustomButton from './containers/button/CustomButton';
import DashboardLayout from './containers/DashboardLayout'; // This file needs an <Outlet /> inside

// Memoized layout components to prevent unnecessary re-renders
const MemoizedNavbar = memo(Navbar);
const MemoizedDashboardLayout = memo(DashboardLayout);

// Wrapper to add Navbar above public pages
const PageWithNavbar = ({ children }) => (
  <>
    <MemoizedNavbar isSidebarVisible={false} />
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
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

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
        <Route path="/post-details/:id/:slug" element={
          <PageWithNavbar>
            <PostDetailsPage key={location.pathname} />
          </PageWithNavbar>
        } />
        <Route path="/form-details/:id/:slug" element={
          <PageWithNavbar>
            <FormDetailsPage key={location.pathname} />
          </PageWithNavbar>
        } />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<MemoizedDashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="messages" element={<Messages />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFoundError />} />
      </Routes>

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
