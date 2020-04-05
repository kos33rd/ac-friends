import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { toUpper } from 'lodash'

export const useNicknameRowStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  column: {
    display: 'flex',
  },
  nickname: {
    margin: '0 8px',
  },
}))

export const NicknameRowRenderer = (classes) => (rowData) => {
  const { avatar_url, nickname, language } = rowData
  return (
    <div className={classes.column}>
      <Avatar src={avatar_url} alt='Player avatar' className={classes.avatar} />
      <Typography className={classes.nickname}>{nickname}</Typography>
      <Typography variant='caption'>{toUpper(language)}</Typography>
    </div>
  )
}
