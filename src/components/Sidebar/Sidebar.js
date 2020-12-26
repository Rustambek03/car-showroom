import { Grid } from '@material-ui/core';
import React from 'react';

const Sidebar = () => {
    return (
        <Grid container>
            <Grid item md={3} style={{ backgroundColor: "gray", height: "100%" }}>
                <p style={{ margin: "100x" }}>Hello</p>
            </Grid>
        </Grid>
    );
};

export default Sidebar;