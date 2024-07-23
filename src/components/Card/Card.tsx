import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({

    components: {
        
        MuiTypography: {
            variants: [{
                props: { variant: "body2" }, style:
                {
                    fontSize: 11
                }
            },
            {
                props: { variant: "body1" }, style:
                {
                    fontSize: 8
                }
            }]
        },
    }
});

const Card = ({tour}) => {
    return (<ThemeProvider theme={theme}> 
    
    <Paper elevation={5} variant='outlined'>
        
        <Grid mx={3}><img src={tour.image} width={200} height={200} />
        <Box> 
            <Typography variant="subtitle1" component="h2">
        {tour.name}</Typography>
        </Box>
        
        
        <Box sx={{
            display: "flex",
            alignItems: "center"
        }}>
            <AccessTime sx={{
                width: 2.5
            }} />
            <Typography component="p" variant="body2" marginLeft={.3}>
                {tour.duration} hours
            </Typography>
        </Box>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            marginTop: .8
        }}
        >

            <Rating name="read-only" value={5} readOnly size='small' />
            <Typography component="p" variant="body1" marginLeft={1.3}>
               {tour.rating}</Typography>
            <Typography component="p" variant="body1" marginLeft={.3}>
               {tour.numberOfReviews} reviews
            </Typography>
        </Box >
        <Box sx={{
            display: "flex",
            alignItems: "center",
        }}   > <Typography component="h3" variant="h6">
                price c {tour.price}$
            </Typography>

        </Box>
    </Grid></Paper><Box></Box></ThemeProvider>
    );
}
export default Card;