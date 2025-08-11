import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Nav from '../components/Nav';
import './Home.css';
import Header from '../components/Header';

function Bubble({
  x,
  y,
  size,
  children,
}: {
  x: number;
  y: number;
  size: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="Bubble"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
      }}
    >
      <div
        className='BubbleContent'
        style={{
          width: size,
          height: size,
          fontSize: `${Math.max(16, size * 0.18)}px`, // scales with bubble size, min 16px
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bubbleSize, setBubbleSize] = useState(200);
  const [bubbleSpeed, setBubbleSpeed] = useState(3);

  // MUI Popover state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function getRandomPosition(maxWidth: number, maxHeight: number) {
    return {
      x: Math.random() * (maxWidth - bubbleSize),
      y: Math.random() * (maxHeight - bubbleSize),
      dx: (Math.random() - 0.5) * bubbleSpeed * 2,
      dy: (Math.random() - 0.5) * bubbleSpeed * 2,
    };
  }

  const [positions, setPositions] = useState(() =>
    routes.map(() =>
      getRandomPosition(window.innerWidth, window.innerHeight * 0.6)
    )
  );

  useEffect(() => {
    const handleResize = () => {
      setPositions(positions =>
        positions.map(() =>
          getRandomPosition(window.innerWidth, window.innerHeight * 0.6)
        )
      );
    };
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setPositions(positions =>
        positions.map((pos) => {
          let { x, y, dx, dy } = pos;
          const maxWidth = window.innerWidth;
          const maxHeight = window.innerHeight;

          x += dx;
          y += dy;

          // Bounce off edges
          if (x <= 0 || x >= maxWidth - bubbleSize) dx = -dx;
          if (y <= 0 || y >= maxHeight - bubbleSize) dy = -dy;

          // Clamp positions
          x = Math.max(0, Math.min(x, maxWidth - bubbleSize));
          y = Math.max(0, Math.min(y, maxHeight - bubbleSize));

          return { x, y, dx, dy };
        })
      );
    }, 30);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [bubbleSize, bubbleSpeed]);

  useEffect(() => {
    setPositions(
      routes.map(() =>
        getRandomPosition(window.innerWidth, window.innerHeight * 0.6)
      )
    );
  }, [bubbleSize, bubbleSpeed]);

  // Handlers for MUI Popover
  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSettingsClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='Page Home'>
        <Header>
         <Box sx={{ margin: '20px 0', display: 'inline-block', position: 'relative' }}>
          <IconButton
            aria-label="Bubble Settings"
            onClick={handleSettingsClick}
            size="large"
          >
            <SettingsIcon fontSize="inherit" />
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleSettingsClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Box sx={{ p: 2, minWidth: 220 }}>
              <Typography gutterBottom>Bubble Size</Typography>
              <Slider
                min={50}
                max={400}
                value={bubbleSize}
                onChange={(_, val) => setBubbleSize(Number(val))}
                valueLabelDisplay="auto"
              />
              <Typography gutterBottom>Bubble Speed</Typography>
              <Slider
                min={1}
                max={10}
                value={bubbleSpeed}
                onChange={(_, val) => setBubbleSpeed(Number(val))}
                valueLabelDisplay="auto"
              />
            </Box>
          </Popover>
        </Box>
        </Header>
      <div className='Text'>
        <h1>Welcome to Andrew's Website</h1>
      </div>
      <div
        className="BubbleContainer"
        ref={containerRef}
      >
        {routes.map(({ path, name }, idx) => (
          <Bubble
            key={path}
            x={positions[idx]?.x}
            y={positions[idx]?.y}
            size={bubbleSize}
          >
            <Link to={path}>{name}</Link>
          </Bubble>
        ))}
      </div>
    </div>
  );
}

export default Home;