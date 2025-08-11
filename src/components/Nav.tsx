import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { useState } from 'react';

function Nav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="Navigation Menu"
        onClick={handleMenuClick}
        size="large"
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {routes.map(({ path, name }) => (
          <MenuItem
            key={path}
            component={Link}
            to={path}
            onClick={handleMenuClose}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default Nav;