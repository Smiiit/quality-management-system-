import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

import IMG from '../../assets/Image/Img2.png';
import img from '../../assets/Image/_3b145d54-b060-4481-b328-28c5e4dab357.jfif';
import { CardData } from '../../assets/data/TableData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProjectCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/two'); // Assuming './sections/two/view' is the correct path to your destination component
  };

  return (
    <>
      <div>
        <Paper
          sx={{ flexGrow: 1 }}
          elevation={8}
          className="w-100 h-100 m-3 position-relative overflow-hidden"
        >
          <div
            className="w-100 h-100 img-fluid position-absolute top-0 start-0 rounded z-4"
            style={{
              backgroundColor: '#000',
              objectFit: 'cover',
              maxWidth: '100%',
              maxHeight: '100%',
              opacity: '0.1',
            }}
          >
            <img
              src={IMG}
              alt="Project background"
              className="w-100 h-100 img-fluid position-absolute top-0 start-0 rounded z-3"
              style={{ objectFit: 'cover', maxWidth: '100%', maxHeight: '100%', opacity: '0.5' }}
            />
          </div>

          <div className=" mt-4 mb-4 d-flex flex-wrap justify-content-around w-100 h-auto">
            {CardData.map((items) => (
              <Item>
                <Card
                  sx={{ maxWidth: 345 }}
                  onClick={handleClick}
                  className="m-4 w-50 d-flex justify-content-around w-100 h-auto"
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={img}
                      alt="green iguana"
                      className=""
                    />
                    <CardContent className="align-items-center">
                      <Typography gutterBottom variant="h5" component="div">
                        {items.cardName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {items.cardContent}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            ))}
          </div>
        </Paper>
      </div>

      {/* <div>
        <Paper
          sx={{ flexGrow: 1 }}
          elevation={8}
          className="w-100 h-100 m-3 position-relative overflow-hidden"
        >
          <div
            className="w-100 h-100 img-fluid position-absolute top-0 start-0 rounded z-4"
            style={{
              backgroundColor: '#000',
              objectFit: 'cover',
              maxWidth: '100%',
              maxHeight: '100%',
              opacity: '0.1',
            }}
          >
            <img
              src={IMG}
              alt="Project background"
              className="w-100 h-100 img-fluid position-absolute top-0 start-0 rounded z-3"
              style={{ objectFit: 'cover', maxWidth: '100%', maxHeight: '100%', opacity: '0.5' }}
            />
          </div>
          <Grid container className='d-flex flex-row justify-content-around' spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 1, md: 12 }}>
          {Array.from(Array(1)).map((_, outerIndex) => (
            <Grid item xs={2} sm={4} md={4} key={outerIndex}>
              <Item className='d-flex flex-row flex-wrap justify-content-around w-100 h-auto '>
                {CardData.map((card, innerIndex) => (
                  <div className='d-flex flex-row justify-content-around w-auto h-50 m-3 p-3 ' key={innerIndex}>
                    <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="240"
                          image={img}
                          alt="Green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {card.cardName}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {card.cardContent}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                ))}
              </Item>
            </Grid>
          ))}
        </Grid>
        </Paper>
      </div> */}
    </>
  );
}
