import React from 'react'

const DiscussionForum = () => {
  return (
    <div>
<<<<<<< HEAD
      DiscussionForum
=======
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

              <div className="comment"> Comments </div>

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
              <Button variant="outlined" onClick={() => handleClickOpen(val)}>
                <EditRoundedIcon style={{ fill: "#192A56" }} />
              </Button>
            </Grid>

            <Grid style={{ margin: "20px" }}>
              <Button variant="outlined">
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
>>>>>>> rolesonpro
    </div>
  )
}

export default DiscussionForum
