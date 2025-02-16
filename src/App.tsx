// App.jsx
import Sidebar from './components/Sidebar';
import MainView from './components/MainView';
import { Box, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${240}px`, width: `calc(100% - ${240}px)` }}>
        <Toolbar /> {/* Dodaj Toolbar, aby treść nie była zasłonięta przez AppBar */}
        <MainView />
      </Box>
    </Box>
  );
}

export default App;