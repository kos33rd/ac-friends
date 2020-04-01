import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import telegram from '~/assets/icons/telegram.png'
import github from '~/assets/icons/github.png'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  socialLink: {
    width: 24,
  },
  copyright: {
    marginTop: 48
  }
}));

const Copyright = () => {
  const classes = useStyles()
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.copyright}>
      {'Oh, and almost forgot to mention: All rights belong to their respective owners.'}
    </Typography>
  );
}


export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Woah, didn't expect you to get here 😊
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        <span>Anyway, if you would like to ask a question or suggest an improvement - feel free to communicate with me via&nbsp;</span>
        <a href='https://t.me/thirtythird'>
          <img className={classes.socialLink} src={telegram} />
        </a>
        <span>&nbsp;or&nbsp;</span>
        <a href='https://github.com/kos33rd'>
          <img className={classes.socialLink} src={github} />
        </a>
        <span>.</span>
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Moreover - you can make your own <Link href='https://github.com/kos33rd/ac-friends'>New Friends app</Link> - it's totally opensource 🎉
      </Typography>
      <Copyright />
    </footer>
  )
}
