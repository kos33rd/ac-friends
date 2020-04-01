import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'This is a non-profit educational project. All rights belong to their respective owners.'}
  </Typography>
);


export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Here will be a short text about project and author with github and email links.
      </Typography>
      <Copyright />
    </footer>
  )
}
