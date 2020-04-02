import { createStore, createApi } from 'effector'

const profile = createStore({ isLoaded: false })

export const { profileIsLoading, profileLoaded, profileLoadFailed } = createApi(profile, {
  profileIsLoading: (state) => ({ ...state, isLoaded: false }),
  profileLoaded: (state, profile) => ({ ...profile, isAuthorized: true, isLoaded: true }),
  profileLoadFailed: (state, error) => ({ ...state, isAuthorized: false, isLoaded: true, error }),
})

export default profile
