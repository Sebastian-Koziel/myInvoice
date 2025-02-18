// components/Sidebar.tsx
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <div style={{ padding: '16px' }}>
        <Typography variant="h6">
          Aplikacja Faktury
        </Typography>
      </div>
    </Drawer>
  );
}

export default Sidebar;