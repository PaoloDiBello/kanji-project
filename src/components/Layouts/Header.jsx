import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import Spinner from '../Spinner.jsx'

import { connect } from 'react-redux'

const Header =  ({loading}) =>
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Kanji App
      </Typography>
    </Toolbar>
        {true && <Spinner/>}
  </AppBar>


  const mapStateToProps = state => ({
  loading: state.Items.loadingItems
});


export default connect(
  mapStateToProps,
)(Header);
