import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import theme from './theme';
import { useNavigate } from 'react-router-dom';
import { MenuBook } from '@mui/icons-material';

export const CourseCard = ({ image, author, authorIcon, title, rating, price, duration }) => {
  const navigate = useNavigate();
  return (
    <Card
      variant='outlined'
      sx={{ borderRadius: '1rem', borderColor: theme.palette.primary.line, maxWidth: 450, margin: 'auto' }}
      onClick={() => navigate('course')}
    >
      <CardActionArea>
        <CardMedia component='img' image={image} sx={{ borderRadius: '1.5rem', padding: '.7rem' }} />
        <CardContent sx={{ padding: '0.7rem' }}>
          <ListItem button sx={{ paddingX: 0 }}>
            <ListItemAvatar>
              <Avatar alt='Profile Picture' src={authorIcon} />
            </ListItemAvatar>
            <ListItemText color='grey' primary={author} />
          </ListItem>
          <Typography>{title}</Typography>

          <Grid container spacing={1} marginY={2}>
            <Grid item xs={6} display='flex'>
              <AccessTimeIcon color='primary' sx={{ marginX: 1 }} />
              <Typography variant='body1' color='grey'>
                {duration}
              </Typography>
            </Grid>
            <Grid item xs={6} display='flex'>
              <MenuBook color='primary' sx={{ marginX: 1 }} />
              <Typography variant='body1' color='grey'>
                {duration}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems='center'
            justifyContent='space-between'
            sx={{ background: theme.palette.primary.light, borderRadius: 2, padding: 1.5 }}
          >
            <Typography component='legend' variant='h6' color='primary' fontWeight='bold'>
              {price}
            </Typography>
            <Rating size='small' value={rating} readOnly />
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export function ScrollTop(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#root');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role='presentation' sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}
