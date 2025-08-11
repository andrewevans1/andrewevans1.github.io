import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export const routes = [
  {
    path: '/',
    name: 'Home',
    element: Home,
  },
  {
    path: '/about',
    name: 'About',
    element: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    element: Projects,
  },
];