import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

import Spinner from '../Spinner.jsx'

import { connect } from 'react-redux'

const Header =  ({loading}) =>
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Kanji App
      </Typography>
    </Toolbar>
        {loading && <Spinner/>}
  </AppBar>


  const mapStateToProps = state => ({
  loading: state.Items.loadingItems
});


export default connect(
  mapStateToProps,
)(Header);
