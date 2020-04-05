import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import { truncate } from 'lodash'

export const useCommentaryRowStyles = makeStyles((theme) => ({
  body: {
    maxHeight: theme.spacing(9),
    overflow: 'hidden',
  },

  popover: {
    maxWidth: 380,
    margin: 16,
  }
}))

export const CommentaryRow = ({ rowData }) => {
  const classes = useCommentaryRowStyles()
  const { commentary } = rowData
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);


  return (
    <div
      className={classes.body}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <Typography>{truncate(commentary, { length: 50, separator: /,? +/ })}</Typography>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
      >
        <Typography className={classes.popover}>{commentary}</Typography>
      </Popover>
    </div>
  )
}
