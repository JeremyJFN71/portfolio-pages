import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { lazy, Suspense } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import './App.css';
import './Admin.css';
import './theme.css'

import Admin from './layouts/Admin';
import Loading from './components/Loading';

// Middlewares
import Authenticated from './middleware/Authenticated';
import Guest from './middleware/Guest';

// Pages
const Home = lazy(()=>import('./pages/Home'));
const Login = lazy(()=>import('./pages/Login'));
const AdminProject = lazy(()=>import('./pages/AdminProject'));
const ProjectEdit = lazy(()=>import('./pages/ProjectEdit'));
const AdminEmail = lazy(()=>import('./pages/AdminEmail'));
const EmailDetail = lazy(()=>import('./pages/EmailDetail'));

export default function App() {
  AOS.init({
    offset: '100'
  });

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Navigate to='/admin/login' />} />

          {/* Guest Middleware */}
          <Route element={<Guest />}>
            <Route path='/admin/login' element={<Login />} />
          </Route>

          {/* Authenticated Middleware */}
          <Route element={<Authenticated />}>
            {/* Admin Layout */}
            <Route path='/admin' element={<Admin />}>
              <Route path='project' element={<AdminProject />} />
              <Route path='project/:id/edit' element={<ProjectEdit />} />
              <Route path='email' element={<AdminEmail />} />
              <Route path='email/:id' element={<EmailDetail />} />
            </Route>
          </Route>

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}