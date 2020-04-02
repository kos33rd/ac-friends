import { createStore, createEffect } from 'effector'
import api from '~/data/api'

const players = createStore([])

export const fetchPlayers = createEffect({
  handler: () => api.get('players').then(res => res.data),
})

players.on(fetchPlayers.doneData, (state, players) => players)

export default players
