import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import LoadingSignal from './loadingSignal';
import LazyLoad from './lazyLoad';

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
    <Suspense fallback={<LoadingSignal componentName="navbar" />}>
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
 const ScrollTopTopBtn = () =>  {
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

const AppContent = () => {
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
            <Suspense fallback={<LoadingSignal componentName="home page" />}>
              <Home />
            </Suspense>
          </PageWithNavbar>
        } />
        <Route path="/forms" element={
          <PageWithNavbar>
            <Suspense fallback={<LoadingSignal componentName="forms" />}>
              <Forms />
            </Suspense>
          </PageWithNavbar>
        } />
        <Route path="/articles" element={
          <PageWithNavbar>
            <Suspense fallback={<LoadingSignal componentName="articles" />}>
              <Articles />
            </Suspense>
          </PageWithNavbar>
        } />
        <Route path="/sign-in" element={
          <Suspense fallback={<LoadingSignal componentName="sign in" />}>
            <SignIn />
          </Suspense>
        } />
        <Route path="/sign-up" element={
          <Suspense fallback={<LoadingSignal componentName="sign up" />}>
            <SignUp />
          </Suspense>
        } />
        <Route path="/post-details/:id/:slug" element={
          <PageWithNavbar>
            <Suspense fallback={<LoadingSignal componentName="post details" />}>
              <PostDetailsPage />
            </Suspense>
          </PageWithNavbar>
        } />
        <Route path="/form-details/:id/:slug" element={
          <PageWithNavbar>
            <Suspense fallback={<LoadingSignal componentName="form details" />}>
              <FormDetailsPage />
            </Suspense>
          </PageWithNavbar>
        } />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={
          <Suspense fallback={<LoadingSignal componentName="dashboard" />}>
            <DashboardLayout>
              <Suspense fallback={<LoadingSignal componentName="dashboard content" />}>
                <Dashboard />
              </Suspense>
            </DashboardLayout>
          </Suspense>
        } />
        <Route path="/profile" element={
          <Suspense fallback={<LoadingSignal componentName="dashboard" />}>
            <DashboardLayout>
              <Suspense fallback={<LoadingSignal componentName="profile" />}>
                <Profile />
              </Suspense>
            </DashboardLayout>
          </Suspense>
        } />
        <Route path="/submissions" element={
          <Suspense fallback={<LoadingSignal componentName="dashboard" />}>
            <DashboardLayout>
              <Suspense fallback={<LoadingSignal componentName="submissions" />}>
                <Submissions />
              </Suspense>
            </DashboardLayout>
          </Suspense>
        } />
        <Route path="/messages" element={
          <Suspense fallback={<LoadingSignal componentName="dashboard" />}>
            <DashboardLayout>
              <Suspense fallback={<LoadingSignal componentName="messages" />}>
                <Messages />
              </Suspense>
            </DashboardLayout>
          </Suspense>
        } />
        <Route path="/users" element={
          <Suspense fallback={<LoadingSignal componentName="dashboard" />}>
            <DashboardLayout>
              <Suspense fallback={<LoadingSignal componentName="users" />}>
                <Users />
              </Suspense>
            </DashboardLayout>
          </Suspense>
        } />

        {/* 404 */}
        <Route path="*" element={
          <Suspense fallback={<LoadingSignal componentName="page" />}>
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
export {AppContent, ScrollTopTopBtn };