import { useEffect, useState } from "react";
import React from "react";

import axios from "axios";
import axiosInstance from "../axiosinterceptor";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import "./css/dicussform.css";
import {
  Avatar,
  Button,
  Card,
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
import CommentList from "./comment/CommentList";
import AddComment from "./comment/AddComment";

const DiscussionForum = (props) => {
  // GET Operation----------------------------------
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("http://127.0.0.1:4000/dash/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // POST ---------------------------------------
  const [form, setForm] = useState({
    title: "",
    query: "",
    date: Date.now(),
  });

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState({ title: "", query: "" });

  const handleClickOpen = (val) => {
    setSelectedValue(val);
    setForm({
      title: val.title || "",
      query: val.query || "",
      date: val.date || Date.now(),
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const [errors, setErrors] = useState({});

  const sumbmitform = () => {
   
    const newErrors = {};


    if (!form.title.trim() ||!form.query.trim() ) {
      newErrors.title = 'Title  is required';
      newErrors.query = 'query  is required';
      setErrors(newErrors);

      
    }else{


    if (selectedValue._id) {
      // If _id exists, it's an update

      axiosInstance
        .put("http://127.0.0.1:4000/dash/edit/" + selectedValue._id, form)
        .then((response) => {
          if (response.data === "Updated successfully") {
            alert(response.data);
            window.location.reload(false);
          } else {
            alert("not updated");
          }
        });
    } else {
      // Otherwise, it's a new post
      axiosInstance.post("http://127.0.0.1:4000/dash/add", form).then((res) => {
        alert(res.data);
        window.location.reload(false);
      });
    }
    setOpen(false);
  }
}

  // DELETE-------------------------
  function removeBlog(id) {
    axiosInstance
      .delete("http://127.0.0.1:4000/dash/remove/" + id)
      .then((res) => {
        alert(res.data);
        window.location.reload(false);
      });
  }


  const [userId, setUserId] = useState("");

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
              <Grid item xs={5} sm={9} md={10}>
                Queries
              </Grid>
              <Grid item xs={7} sm={3} md={2}>
                <React.Fragment>
                  <Button variant="contained" onClick={handleClickOpen}>
                    Add Queries
                  </Button>

                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Queries</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Hello Interns, Here you can add your Queries..
                      </DialogContentText>
                      <TextField
                      helperText={errors.title}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={form.title}
                        onChange={(e) => {
                          setForm({ ...form, title: e.target.value });
                        }}
                      />
                      <TextField
                       helperText={errors.query}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Write your queries..."
                        type="text"
                        fullWidth
                        variant="standard"
                        multiline
                        rows={4}
                        value={form.query}
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
        <Grid
          key={i}
          sx={{ padding: "2px 2px" }}
          container
          spacing={2}
          style={{ marginBottom: "8px" }}
        >
          <Grid item sm={9} md={11}>
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

              <CommentList discussionId={val._id} />

              <Divider />
              <AddComment discussionData={val._id} />
            </Card>
          </Grid>
          <Grid item sm={3} md={1}>
            <Grid style={{ margin: "20px" }}>
              <Button variant="outlined" onClick={() => handleClickOpen(val)}>
                <EditRoundedIcon style={{ fill: "#192A56" }} />
              </Button>
            </Grid>

            <Grid style={{ margin: "20px" }}>
              <Button
                variant="outlined"
                onClick={() => {
                  removeBlog(val._id);
                }}
              >
                <DeleteRoundedIcon
                  style={{ fill: "#192A56", cursor: "pointer" }}
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
