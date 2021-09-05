import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Yevro = () => {
    return (
        <div>
        <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
                <Paper className='card'>
                    <div className="card-foto">
                    <img src="/images/yevro/22cfac7d0499a76b.jpg" alt="" />
                    </div>
                    <div className="card-info">
                        <h3>Shotlandcha tuxum</h3>
                        <p>20 000 so'm</p>
                    </div>
                </Paper>
            </Grid>
           
            <Grid item xs={4}>
                <Paper className='card'>
                    <div className="card-foto">
                    <img src="/images/yevro/3519f5262b6d7f78.jpg" alt="" />
                    </div>
                    <div className="card-info">
                        <h3>Ratatuy</h3>
                        <p>50 000 so'm</p>
                    </div>
                </Paper>
            </Grid>
            
            <Grid item xs={4}>
                <Paper className='card'>
                    <div className="card-foto">
                    <img src="/images/yevro/7deafc87dd11ad11.jpg" alt="" />
                    </div>
                    <div className="card-info">
                        <h3>Teftellar</h3>
                        <p>30 000 so'm</p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    </Grid>
        </div>
    );
};

export default Yevro;