import { Typography } from '@mui/material';

const LanguageSwitcher = () => {
  const isEnglish = window.location.pathname === '/en';

  const linkStyle = {
    color: 'white',
    marginRight: '3px',
    textDecoration: isEnglish ? 'none' : 'underline',
  };

  const separatorStyle = {
    color: 'white',
  };

  const enLinkStyle = {
    color: 'white',
    marginLeft: '3px',
    textDecoration: isEnglish ? 'underline' : 'none',
  };

  return (
    <>
      <Typography component="a" href="/fr" style={linkStyle}>
        FR
      </Typography>
      <Typography style={separatorStyle}>/</Typography>
      <Typography component="a" href="/en" style={enLinkStyle}>
        EN
      </Typography>
    </>
  );
};

export default LanguageSwitcher;
