import { Grid, Typography } from '@mui/material';
import CustomPaper from '../../components/CustomPaper';

export default function Home() {
    return (
        <Grid container style={{height: '100vh'}}>
            <Grid item container xs={6}>
                <Grid item xs={12}>
                    <Typography variant='h1'>Título</Typography>
                </Grid>
                <Grid item xs={4}>
                    <CustomPaper title='Texto 1'/>
                </Grid>
                <Grid item xs={4}>
                    <CustomPaper title='Texto 2'/>
                </Grid>  
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h2'>Título 2</Typography>
            </Grid>
        </Grid>
    );
}