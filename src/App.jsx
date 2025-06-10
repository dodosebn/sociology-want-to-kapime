import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

// Static import map for lazy loading
const componentMap = {
  Home: () => import('./routeCont/Home'),
  NotFoundError: () => import('./routeCont/NotFoundError'),
  Navbar: () => import('./components/navbar/Navbar'),
  SignUp: () => import('./routeCont/SignUp'),
  SignIn: () => import('./routeCont/SignIn'),
  Dashboard: () => import('./routeCont/dashbaord/Dashboard'),
  Profile: () => import('./routeCont/dashbaord/Profile'),
  Submissions: () => import('./routeCont/dashbaord/Submissions'),
  Messages: () => import('./routeCont/dashbaord/Messages'),
  Users: () => import('./routeCont/dashbaord/Users'),
  Footer: () => import('./components/footer/Footer'),
  FormDetailsPage: () => import('./routeCont/FormDetailsPage'),
  PostDetailsPage: () => import('./routeCont/PostDetailsPage'),
  DashboardLayout: () => import('./containers/DashboardLayout'),
  Forms: () => import('./routeCont/Forms'),
  Articles: () => import('./routeCont/Articles'),
  CustomButton: () => import('./containers/button/CustomButton'),
};

// LazyLoad function using static map
const LazyLoad = (key, namedExport = null) => {
  const importer = componentMap[key];
  if (!importer) throw new Error(`Component "${key}" not found in componentMap`);

  return lazy(() =>
    importer().then((module) =>
      namedExport === null
        ? { default: module.default }
        : { default: module[namedExport] }
    )
  );
};

// Lazy loaded components
const Home = LazyLoad('Home');
const NotFoundError = LazyLoad('NotFoundError');
const Navbar = LazyLoad('Navbar');
const SignUp = LazyLoad('SignUp');
const SignIn = LazyLoad('SignIn');
const Dashboard = LazyLoad('Dashboard');
const Profile = LazyLoad('Profile');
const Submissions = LazyLoad('Submissions');
const Messages = LazyLoad('Messages');
const Users = LazyLoad('Users');
const Footer = LazyLoad('Footer');
const FormDetailsPage = LazyLoad('FormDetailsPage');
const PostDetailsPage = LazyLoad('PostDetailsPage');
const DashboardLayout = LazyLoad('DashboardLayout');
const Forms = LazyLoad('Forms');
const Articles = LazyLoad('Articles');
const CustomButton = LazyLoad('CustomButton');

// Wrapper to add Navbar to pages
const PageWithNavbar = ({ children }) => (
  <>
    <Suspense fallback={<div>Loading navbar...</div>}>
      <Navbar isSidebarVisible={false} />
    </Suspense>
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
    <Suspense fallback={null}>
      <CustomButton
        title=""
        icon={<FaArrowUp size={18} />}
        backgroundColor="#FFD682"
        textColor="#000"
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      />
    </Suspense>
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
        <Route path="/" element={
          <PageWithNavbar>
            <Suspense fallback={<div>Loading home...</div>}>
              <Home />
            </Suspense>
          </PageWithNavbar>
        } />
        <Route path="/forms" element={
          <PageWithNavbar>
            <Suspense fallback={<div>Loading forms...</div>}>
              <Forms />
            </Suspense>
          </PageWithNavbar>
        } />
        <Route path="/articles" element={
          <PageWithNavbar>
            <Suspense fallback={<div>Loading articles...</div>}>
              <Articles />
            </Suspense>
          </PageWithNavbar>
        } />
        <Route path="/sign-in" element={
          <Suspense fallback={<div>Loading sign in...</div>}>
            <SignIn />
          </Suspense>
        } />
        <Route path="/sign-up" element={
          <Suspense fallback={<div>Loading sign up...</div>}>
            <SignUp />
          </Suspense>
        } />
        <Route path="/post-details/:id/:slug" element={
          <PageWithNavbar>
            <Suspense fallback={<div>Loading post details...</div>}>
              <PostDetailsPage />
            </Suspense>
          </PageWithNavbar>
        } />
        <Route path="/form-details/:id/:slug" element={
          <PageWithNavbar>
            <Suspense fallback={<div>Loading form details...</div>}>
              <FormDetailsPage />
            </Suspense>
          </PageWithNavbar>
        } />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={
          <Suspense fallback={<div>Loading dashboard...</div>}>
            <DashboardLayout>
              <Suspense fallback={<div>Loading dashboard content...</div>}>
                <Dashboard />
              </Suspense>
            </DashboardLayout>
          </Suspense>
        } />
        <Route path="/profile" element={
          <Suspense fallback={<div>Loading dashboard...</div>}>
            <DashboardLayout>
              <Suspense fallback={<div>Loading profile...</div>}>
                <Profile />
              </Suspense>
            </DashboardLayout>
          </Suspense>
        } />
        <Route path="/submissions" element={
          <Suspense fallback={<div>Loading dashboard...</div>}>
            <DashboardLayout>
              <Suspense fallback={<div>Loading submissions...</div>}>
                <Submissions />
              </Suspense>
            </DashboardLayout>
          </Suspense>
        } />
        <Route path="/messages" element={
          <Suspense fallback={<div>Loading dashboard...</div>}>
            <DashboardLayout>
              <Suspense fallback={<div>Loading messages...</div>}>
                <Messages />
              </Suspense>
            </DashboardLayout>
          </Suspense>
        } />
        <Route path="/users" element={
          <Suspense fallback={<div>Loading dashboard...</div>}>
            <DashboardLayout>
              <Suspense fallback={<div>Loading users...</div>}>
                <Users />
              </Suspense>
            </DashboardLayout>
          </Suspense>
        } />

        {/* 404 */}
        <Route path="*" element={
          <Suspense fallback={<div>Loading...</div>}>
            <NotFoundError />
          </Suspense>
        } />
      </Routes>

      {/* Footer shown only on non-dashboard routes */}
      {!isDashboardRoute && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
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
