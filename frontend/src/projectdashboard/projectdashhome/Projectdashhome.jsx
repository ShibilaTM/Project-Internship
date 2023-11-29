import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';;


const Projectdashhome = () => {
    const smallitemsinHomepage = [{ heading: "profile" }, { heading: "Discussion Forum" }, { heading: "Submissions" }]


    return (
        <div>





            <Grid container spacing={3} style={{ height: "500px", border: "1px solid black", width: "1200px" }}  >


                <Grid item lg={3} style={{ border: "1px solid black" }}>
                    <button style={{ display: "block", width: "100px", height: "50px", padding: "5px", margin: "10px", borderRadius: "5px", marginLeft: "120px" }}>Home</button>
                    <button style={{ display: "block", width: "100px", height: "50px", padding: "5px", margin: "10px", borderRadius: "5px", marginLeft: "120px" }}>Grade</button>
                    <button style={{ display: "block", width: "100px", height: "50px", padding: "5px", margin: "10px", borderRadius: "5px", marginLeft: "120px" }}>Logout</button>
                </Grid>



                <Grid container lg={6} style={{ border: "1px solid black" }}>

                    {smallitemsinHomepage.map((item, index) => (

                        <Grid item lg={4} style={{ border: "1px solid black" }}>
                            <Card style={{ width: "100px" }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {item.heading}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    ))}


                    <Grid item lg={12} >
                        <Card style={{ width: "100px" }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Weekly submission
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>




                </Grid>
                {/* <Grid container lg={6}>
                    <Grid item lg={6}>
                        <h1>ROLESON</h1>
                    </Grid>
                    <Grid item lg={6}>
                        <h1>ROLESON</h1>
                    </Grid>
                </Grid> */}

                <Grid item lg={3} >
                    <Card style={{ height: "300px", border: "1px solid black" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>








            </Grid>


        </div >
    )
}

export default Projectdashhome
