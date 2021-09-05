import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const Ichimlik = () => {
    return (
        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>

                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/ichimlik/05d439dc13154f93.jpg" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Choy</h3>
                            <p>5 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>
                
                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/ichimlik/149fda0be8b00cd1.jpg" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Qulupnay sok</h3>
                            <p>15 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>
                
                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/ichimlik/6bda0701820fa601.jpg" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Namatak choy</h3>
                            <p>3 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>
                
                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/ichimlik/Bitmap (5).png" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Sprite 1L</h3>
                            <p>8 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>
                
                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/ichimlik/Bitmap (6).png" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Coca cola 1,5L</h3>
                            <p>11 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>
                
                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/ichimlik/Bitmap (7).png" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Fanta 1L</h3>
                            <p>8 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default Ichimlik;