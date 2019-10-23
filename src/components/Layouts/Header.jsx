import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ReloadIcon from "@material-ui/icons/Cached";
import Spinner from "../Spinner.jsx";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  backHome: {
      marginLeft: "auto"
  }
}));

const Header = ({ loading, loading2 }) => {
  const classes = useStyles();

  const onClick = () => {
    window.location.href = window.location.origin;
  };

  const reload = () => {

    window.location.reload();
  }


  const [isHome, setIsHome] = useState("");

  useEffect(() => {
    const condition = !(window.location.pathname === "/");
    setIsHome(condition);
  }, [loading, loading2]);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Kanji App
        </Typography>

        <IconButton color="inherit" onClick={reload}>
          <ReloadIcon />
        </IconButton>

        {isHome && (
          <IconButton
            color="inherit"
            className={classes.backHome}
            onClick={onClick}
          >
            <ArrowBackIcon />
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

export default connect(mapStateToProps)(Header);
