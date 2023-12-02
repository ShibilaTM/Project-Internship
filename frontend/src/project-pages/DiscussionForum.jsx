import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import "./css/dicussform.css";
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




const DiscussionForum = (props) => {




  //GET Operation----------------------------------
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/dash/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);





  //POST ---------------------------------------

  const [form, setForm] = useState({
    title:"",
    query:"",
    date:Date.now()
  });

  const sumbmitform = (props) => {
    if (props.method === "put") {
      axios
        .put("http://localhost:4000/dash/edit/" + props.data._id, form)
        .then((response) => {
          if (response.data === "Updated successfully") {
            alert(response.data);
            window.location.reload(false);
          } else {
            alert("not updated");
          }
        });
    } else {
      axios.post("http://localhost:4000/dash/add", form).then((res) => {
        alert(res.data);
      });
    }
    setOpen(false);
  };





  //DELETE-------------------------
  function removeBlog(id) {
    axios.delete("http://localhost:4000/dash/remove/" + id).then((res) => {
      alert(res.data);
      window.location.reload(false);
    });
  }



  //Update------------------




  var [update, setUpdate] = useState(false);
  var [singleValue, setSingleValue] = useState([]);



  const updateBlog = (val) => {
    console.log("update clicked", val);
    setUpdate(true);
    setSingleValue(val);
  };






  //-------------------

  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>
        <QuestionAnswerRoundedIcon /> &nbsp; Discussion Form
      </h2>

      <br />
      <br />

      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Card style={{ padding: "1em" }}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                Queries
              </Grid>
              <Grid item xs={2}>
                <React.Fragment>
                  <Button
                    variant="contained"
                  
                    onClick={handleClickOpen}
                  >
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
                        onChange={(e) => {
                          setForm({ ...form, title: e.target.value });
                        }}
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
                        onChange={(e) => {
                          setForm({ ...form, query: e.target.value });
                        }}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={sumbmitform}>Add</Button>
                    </DialogActions>
                  </Dialog>


                 
                </React.Fragment>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <br />
      {data.map((val, i) => (
        <Grid key={i} container spacing={2} style={{ marginBottom: "8px" }}>
          <Grid item xs={11}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Last Updated : {val.date}
                  <Avatar sx={{ bgcolor: yellow, scale: ".5" }}>A</Avatar>
                </Typography>
                <Typography variant="h5" component="div">
                  {val.title}
                </Typography>

                <Typography variant="body2">
                  {val.query}
                  <br />
                </Typography>
              </CardContent>
              <Divider />

              <div className="comment">Here comments will come</div>

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
                    <SendRoundedIcon />
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={1}>
            <Grid style={{ margin: "20px" }}>


            <Button
                    variant="outlined"
                  
                    onClick={handleClickOpen}
                  > 
                <EditRoundedIcon style={{ fill: "#192A56" }}     onClick={() => updateBlog(val)}  />
                  </Button>



                  


             
            </Grid>

            <Grid style={{ margin: "20px" }}>
              
            <Button
                    variant="outlined">
                          <DeleteRoundedIcon
                style={{ fill: "#192A56", cursor: "pointer" }}
                onClick={() => {
                  removeBlog(val._id);
                }}
              />
                    </Button>
          
            </Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default DiscussionForum;
