import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ReloadIcon from "@material-ui/icons/Cached";
import Spinner from "../Spinner.jsx";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  backHome: {
    marginLeft: "auto"
  }
}));

const Header = ({ loading, loading2, history, location }) => {
  const classes = useStyles();

  console.log("history", history);

  const reload = () => {
    history.go(`/`);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Kanji App
        </Typography>

        <IconButton color="inherit" onClick={reload}>
          <ReloadIcon />
        </IconButton>
        {location.pathname}
        {!(location.pathname === "/") && (
          <IconButton color="inherit" className={classes.backHome}>
            <Link href="/" color="inherit">
              <ArrowBackIcon />
            </Link>
          </IconButton>
        )}
      </Toolbar>
      {(loading || loading2) && <Spinner />}
    </AppBar>
  );
};

const mapStateToProps = state => ({
  loading: state.Items.loadingItems,
  loading2: state.Items.loadingItem
});

export default connect(mapStateToProps)(withRouter(Header));
