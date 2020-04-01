import { createStore, createApi } from 'effector'

const players = createStore([])

export const { loadPlayers } = createApi(players, {
  loadPlayers: (state, players) => [...state, ...players]
})

export default players
