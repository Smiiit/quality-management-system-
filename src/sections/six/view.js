// @mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import Grid from '@mui/material/Grid';
import Details from './Detail';

// ----------------------------------------------------------------------

export default function SixView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> User Profile </Typography>
      <Grid maxWidth="xs" marginTop={2}>
        <Details />
      </Grid>
    </Container>
  );
}
