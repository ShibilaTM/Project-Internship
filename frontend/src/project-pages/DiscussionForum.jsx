import React from "react";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import './css/dicussform.css'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { yellow } from "@mui/material/colors";

const DiscussionForum = () => {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>;
  return (
    <div>
      <h2>
        <QuestionAnswerRoundedIcon /> &nbsp; Discussion Form
      </h2>

      <br />
      <br />


      <Grid container spacing={2}>
              <Grid item xs={11}>
  <Card style={{padding:'1em'}}>

  <Grid container spacing={2}>
  <Grid item xs={10}>
 Queries
  </Grid>
  <Grid item xs={2}>

  <React.Fragment>
      <Button variant="contained" style={{background:''}} onClick={handleClickOpen}>
       Add Queries
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Queries</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Hello Students, Here you can add your Queries..
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Write your quries..."
            type="email"
            fullWidth
            variant="standard"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  </Grid>

</Grid>
          


        </Card>
              </Grid>
           
            </Grid>


      <br />

      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
              Posted  20 min ago <Avatar sx={{ bgcolor: yellow, scale:'.5'}}>A</Avatar> 
              </Typography>
              <Typography variant="h5" component="div">
           Title    
              </Typography>

              <Typography variant="body2">
                Discuss Questions (www.discuss-data.net) is a new open
                repository for storing, sharing and discussing research data on
                Eastern Europe, South Caucasus and Central ...
                <br />
                
              </Typography>
            </CardContent>
            <Divider />

<div className="comment">
Here comments will come

</div>
        

            <Divider />

            <Grid container spacing={2}>
              <Grid item xs={10}>
                <TextField
                  style={{ padding: "5px", margin: "5px" }}
                  fullWidth
                  label="Write your comments....."
                  id="filled-basic"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  style={{ marginTop: "15px", marginLeft: "5em" }}
                  variant="outlined"
                >
                 <SendRoundedIcon/>
                </Button>
              </Grid>
            </Grid>
        
            
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Grid style={{ margin: "20px" }}>
            <EditRoundedIcon style={{fill:'#192A56'}}/>
          </Grid>

          <Grid style={{ margin: "20px" }}>
            <DeleteRoundedIcon  style={{fill:'#192A56'}} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DiscussionForum;
