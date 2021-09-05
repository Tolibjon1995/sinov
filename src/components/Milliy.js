import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const Milliy = () => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        <Paper className='card'>
                            <div className="card-foto">
                            <img src="/images/milliy/191bfd660c9f0484.jpg" alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Qo'y go'shtli rulet</h3>
                                <p>40 000 so'm</p>
                            </div>
                        </Paper>
                    </Grid>
                   
                    <Grid item xs={4}>
                        <Paper className='card'>
                            <div className="card-foto">
                            <img src="/images/milliy/a9a62973f1fb215c.jpg" alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Beshbarmoq</h3>
                                <p>50 000 so'm</p>
                            </div>
                        </Paper>
                    </Grid>
                    
                    <Grid item xs={4}>
                        <Paper className='card'>
                            <div className="card-foto">
                            <img src="/images/milliy/e069d43aaa46e752.jpg" alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Grechka palov</h3>
                                <p>30 000 so'm</p>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Milliy;