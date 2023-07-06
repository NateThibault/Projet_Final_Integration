"use client"
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

interface MenuItem {
  label: string;
  route: string;
}

function MyMenu() {
  
  const t = useTranslations();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const pathname = usePathname();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const pages: MenuItem[] = [
    { label: t("menu.products"), route: "/products" },
    { label: t("menu.categories"), route: "/categories" },
  ];

  const isEnglish = pathname.includes('/en');

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SportsSoccerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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
              TP3
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" component="a" href={page.route}>{page.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
            </Box>
            <SportsSoccerIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TP3
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href={page.route}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
            <Typography
              component="a"
              href="/fr"
              style={{
              color: isEnglish ? 'white' : 'inherit',
              marginRight: '3px',
              textDecoration: isEnglish ? 'none' : 'underline',
              }}
            >
              FR
            </Typography>
            <Typography>/</Typography>
            <Typography
              component="a"
              href="/en"
              style={{
              color: isEnglish ? 'inherit' : 'white',
              marginLeft: '3px',
              textDecoration: isEnglish ? 'underline' : 'none',
              }}
            >
              EN
            </Typography>
          </Toolbar>
      </Container>
    </AppBar>
  )
}

export default MyMenu;
