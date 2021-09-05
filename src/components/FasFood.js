import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const FasFood = () => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper className='card'>
                            <div className="card-foto">
                                <img src="/images/fasFod/Bitmap (1).png" alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Mexica</h3>
                                <p>53 000 so'm</p>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className='card'>
                            <div className="card-foto">
                                <img src="/images/fasFod/Bitmap (2).png" alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Hot achchiko</h3>
                                <p>64 000 so'm</p>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className='card'>
                            <div className="card-foto">
                                <img src="/images/fasFod/Bitmap (3).png" alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Mexica</h3>
                                <p>45 000 so'm</p>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className='card'>
                            <div className="card-foto">
                                <img src="/images/fasFod/Bitmap.png" alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Gavaya</h3>
                                <p>45 000 so'm</p>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className='card'>
                            <div className="card-foto">
                                <img src="/images/fasFod/Bitmap (4).png" alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Hamburger</h3>
                                <p>23 000 so'm</p>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className='card'>
                            <div className="card-foto">
                                <img src="/images/fasFod/max kvadrat menu - печать 2@2x.png" alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Kombo-1</h3>
                                <p>25 000 so'm</p>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default FasFood;