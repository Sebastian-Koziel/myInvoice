// components/Sidebar.tsx
import { Box, Drawer, styled, Avatar, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ContrastIcon from '@mui/icons-material/Contrast';
import avatarFile from '../assets/person.avif'

const drawerWidth = 103;

const SidebarContainer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: { 
    width: drawerWidth, 
    boxSizing: 'border-box',
    backgroundColor: '#373B53',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'visible'
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  height: '103px',
  width: '100%',
  backgroundColor: '#7C5DFA',
  borderRadius: '0 20px 20px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#9277FF',
    borderRadius: '20px 0 20px 0',
    zIndex: 0
  }
}));

const Logo = styled(ContrastIcon)(({ theme }) => ({
  width: '60px',
  height: '60px',
  zIndex: 10,
  position: 'relative',
  color: 'white'
}));

const BottomSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '32px 0',
  borderTop: '1px solid #494E6E'
}));

const ThemeToggle = styled(IconButton)(({ theme }) => ({
  color: '#858BB2',
  marginBottom: '24px',
  '&:hover': {
    color: 'white'
  },
  
}));

const ThemeToggleIcon = styled(DarkModeIcon)(({ theme }) => ({
  width: '30px',
  height: '30px'
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: '50px',
  height: '50px',
  
}));

function Sidebar() {
  return (
    <SidebarContainer variant="permanent">
      <Box>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Box>
      
      <BottomSection>
        <ThemeToggle>
          <ThemeToggleIcon />
        </ThemeToggle>
        
        <UserAvatar src={avatarFile} alt="User avatar" />
      </BottomSection>
    </SidebarContainer>
  );
}

export default Sidebar;
