import React,{lazy} from 'react';
// import  from React
const componentMap = {
  Home: () => import('../src/routeCont/Home'),
  NotFoundError: () => import('../src/routeCont/NotFoundError'),
  Navbar: () => import('../src/components/navbar/Navbar'),
  SignUp: () => import('../src/routeCont/SignUp'),
  SignIn: () => import('../src/routeCont/SignIn'),
  Dashboard: () => import('../src/routeCont/dashbaord/Dashboard'),
  Profile: () => import('../src/routeCont/dashbaord/Profile'),
  Submissions: () => import('../src/routeCont/dashbaord/Submissions'),
  Messages: () => import('../src/routeCont/dashbaord/Messages'),
  Users: () => import('../src/routeCont/dashbaord/Users'),
  Footer: () => import('../src/components/footer/Footer'),
  FormDetailsPage: () => import('../src/routeCont/FormDetailsPage'),
  PostDetailsPage: () => import('../src/routeCont/PostDetailsPage'),
  DashboardLayout: () => import('../src/containers/DashboardLayout'),
  Forms: () => import('../src/routeCont/Forms'),
  Articles: () => import('../src/routeCont/Articles'),
  CustomButton: () => import('../src/containers/button/CustomButton'),
};
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
export default LazyLoad;