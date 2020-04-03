import { createStore, createApi, createEffect } from 'effector'
import api from '~/data/api'

const profile = createStore({ isLoaded: false })

export const { setProfileIsLoading, setProfileLoaded, setProfileLoadFailed } = createApi(profile, {
  setProfileIsLoading: (state) => ({ ...state, isLoaded: false }),
  setProfileLoaded: (state, profile) => ({ ...profile, isAuthorized: true, isLoaded: true, error: false }),
  setProfileLoadFailed: (state, error) => ({ ...state, isAuthorized: false, isLoaded: true, error }),
})

export const fetchProfile = createEffect({
  handler: () => {
    setProfileIsLoading()
    return api.get('profile').then(res => res.data)
  },
})

fetchProfile.done.watch(({ result }) => {
  setProfileLoaded(result)
})

fetchProfile.fail.watch(({ error }) => {
  setProfileLoadFailed(error)
})

export default profile
