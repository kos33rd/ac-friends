import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStore } from 'effector-react'

import playersStore from '~/data/stores/players'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PlayersTable() {
  const classes = useStyles();
  const players = useStore(playersStore)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player Nickname</TableCell>
            <TableCell >Nintendo ID</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Registered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell component="th" scope="row">
                {player.nickname}
              </TableCell>
              <TableCell>{player.nintendo_id}</TableCell>
              <TableCell>{player.language}</TableCell>
              <TableCell>{player.creation_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
