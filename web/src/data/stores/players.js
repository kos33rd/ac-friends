import { createStore, createEffect, createApi } from 'effector'
import api from '~/data/api'

const players = createStore({ isLoaded: false, list: [] })

export const { setPlayersIsLoading, setPlayersLoaded, setPlayersLoadFailed } = createApi(players, {
  setPlayersIsLoading: (state) => ({ ...state, isLoaded: false }),
  setPlayersLoaded: (state, players) => ({ list: players, isLoaded: true, error: false }),
  setPlayersLoadFailed: (state, error) => ({ list: [], isLoaded: true, error }),
})

export const fetchPlayers = createEffect({
  handler: () => {
    setPlayersIsLoading()
    return api.get('players').then(res => res.data)
  },
})

fetchPlayers.done.watch(({ result }) => {
  setPlayersLoaded(result)
})

fetchPlayers.fail.watch(({ error }) => {
  setPlayersLoadFailed(error)
})


export default players
