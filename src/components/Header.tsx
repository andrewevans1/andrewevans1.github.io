import Nav from './Nav';
import './Header.css';
import { useLocation } from 'react-router-dom';
import { routes } from '../routes';

type HeaderProps = {
  children?: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  const location = useLocation();
  const currentRoute = routes.find(route => route.path === location.pathname);
  const title = currentRoute ? currentRoute.name : '';

  return (
    <header className="Header">
      <Nav />
      <div className="Title">
        {title}
      </div>
      {children}
    </header>
  );
}

export default Header;