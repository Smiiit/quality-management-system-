import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import Tooltip from '@mui/material/Tooltip';
// import Typography from '@mui/material/Typography';
// auth
// import { useAuthContext } from 'src/auth/hooks';
// routes
// import { paths } from 'src/routes/paths';
// import { RouterLink } from 'src/routes/components';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgGradient } from 'src/theme/css';
// components
import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

// const METHODS = [
//   {
   
//     path: paths.auth.jwt.login,

//   },
// ];

export default function AuthClassicLayout({ children, image, title }) {
  // const { method } = useAuthContext();

  const theme = useTheme();

  const upMd = useResponsive('up', 'md');

  const renderLogo = (
    <Logo
      sx={{
        zIndex: 9,
        position: 'absolute',
        m: { xs: 2, md: 5 },
      }}
    />
  );

  const renderContent = (
    <Stack
      sx={{
        width: 1,
        mx: 'auto',
        maxWidth: 480,
        px: { xs: 2, md: 8 },
        py: { xs: 15, md: 30 },
      }}
    >
      {children}
    </Stack>
  );

  const renderSection = (
    <Stack
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
      spacing={10}
      sx={{
        ...bgGradient({
          color: alpha(
            theme.palette.background.default,
            theme.palette.mode === 'light' ? 0.80 : 0.90
          ),
          
        }),
      }}
    >
     

      <Box
        component="img"
        alt="auth"
        src={image || '/assets/illustrations/qmsimg.jpg'}
        sx={{ maxWidth: 720 }}
      />

      
    </Stack>
  );

  return (
    <Stack
      component="main"
      direction="row"
      sx={{
        minHeight: '100vh',
      }}
    >
      {renderLogo}

      {upMd && renderSection}

      {renderContent}
    </Stack>
  );
}

AuthClassicLayout.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.string,
};