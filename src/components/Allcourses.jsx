import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import { Button, TextField, ButtonGroup, Container, Fab, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CourseCard, ScrollTop } from './utils';

import Footer from './footer';
import theme from './theme';

const Home = (props) => {
  // const navigate = useNavigate();
  return (
    <Container>
      {/* hero section */}


      {/* hero section end */}
      {/* searchbar */}
      <Grid container justifyContent={'center'} mt={2}>
        <Grid item xs={8}>
          <TextField id='1' label='' variant='outlined' color='primary' size='small' sx={{ width: '100%' }} />
        </Grid>

        <Grid item sm={1}>
          <Button color='primary' aria-label='upload picture' component='label' variant='outlined' size='large'>
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
      {/* searchbar end */}

      <Grid container spacing={3} style={{ margin: '1rem' }}>
        {courses.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CourseCard {...data} />
          </Grid>
        ))}
      </Grid>
      {/* scroll to top button */}
      <ScrollTop {...props}>
        <Fab size='small' aria-label='scroll back to top' color='primary'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <ButtonGroup variant='outlined' color='primary' aria-label='' sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button>1</Button>
        <Button>2</Button>
      </ButtonGroup>
      <Footer />
    </Container>
  );
};
export default Home;

const courses = [
  {
    author: 'Jason Willams',
    title: 'Data Science and Machine Learning with Python -Hands On!',
    image: 'images/courses-01.jpg',
    authorIcon: 'images/author-01.jpg',
    rating: 4,
    price: '$299.00',
    duration: '08 hr 15 mins',
  },
  {
    author: 'Pamella Foster',
    title: 'Create Amazing Color Schemes for Your UX Design Projects',
    image: 'images/courses-02.jpg',
    authorIcon: 'images/author-02.jpg',
    rating: 5,
    price: '$229.00',
    duration: '08 hr 15 mins',
  },
  {
    author: 'Rose Simmons',
    title: 'Culture & Leadership: Strategies for a Successful Business',
    image: 'images/courses-03.jpg',
    authorIcon: 'images/author-03.jpg',
    rating: 3,
    price: 'Free',
    duration: '08 hr 15 mins',
  },
  {
    author: 'Anna Maria',
    title: 'Finance Series: Learn to Budget and Calculate your Net Worth.',
    image: 'images/courses-04.jpg',
    authorIcon: 'images/author-04.jpg',
    rating: 4,
    price: '$136.00',
    duration: '08 hr 15 mins',
  },
];
