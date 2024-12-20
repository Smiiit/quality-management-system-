// @mui
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import ProjectCard from './ProjectCards'

// ----------------------------------------------------------------------

export default function OneView() {
  const settings = useSettingsContext();

  return (
    <div className=' w-auto h-auto'>
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4" className=''> Projects History </Typography>

        <ProjectCard/>

    </Container>
    </div>
  );
}
