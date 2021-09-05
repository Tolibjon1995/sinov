import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const Disert = () => {
    return (
        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/disert/23b3e90867b3595a.jpg" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Dunkin Donats</h3>
                            <p>15 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/disert/47969e3b5ac32b65.jpg" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Zebra</h3>
                            <p>15 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/disert/6758ae0d16c1b685.jpg" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Malinali chizkeyl</h3>
                            <p>15 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/disert/ca18b65f2e23b17a.jpg" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Praga</h3>
                            <p>15 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className='card'>
                        <div className="card-foto">
                            <img src="/images/disert/d60ad940e44a1958.jpg" alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Marmelad</h3>
                            <p>15 000 so'm</p>
                        </div>
                    </Paper>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default Disert;