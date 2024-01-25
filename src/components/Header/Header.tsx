/*
 * ---------------------------------------------
 * Author: Isaac Mirabueno
 * Date: Thursday January 25th 2024
 * Last Modified by: Isaac Mirabueno - <imirabueno@yondu.com>
 * Last Modified time: January 25th 2024, 6:02:46 pm
 * ---------------------------------------------
 */


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Avatar } from "@mui/material";
import { useSession, signIn, signOut} from "next-auth/react"
import ThemeToggleButton from "@/components/ThemeToggleButton";

interface HeaderMenu { 
  title: string;
  callback(): any;
}
  
export type HeaderProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void; }>,
}

const Header = (props: HeaderProps) => {
  const { ColorModeContext } = props;
  
  const settings: HeaderMenu[] = [
    {
      title: 'Profile',
      callback: () => {},
    },
    {
      title: 'Account',
      callback: () => {},
    },
    {
      title: 'Dashboard',
      callback: () => {},
    },
    {
      title: 'Logout',
      callback: signOut,
    }
  ];
  const { data: session } = useSession();
  const userName = session?.user?.name as string;
  const userProfileImg = session?.user?.image as string;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 3, display: "flex", alignItems: "center"}}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DataSoft
          </Typography>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          </Box>
          <ThemeToggleButton ColorModeContext={ColorModeContext}/>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center"}}>
            {session ? <>
              <Typography textAlign="center" sx={{paddingRight: 5, display: { sm: 'none', md: "flex" } }}>Hi! {userName}</Typography>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={userName} src={userProfileImg} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={setting.callback}>{setting.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
              :
            <Typography onClick={() => signIn()}>Sign in </Typography>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
