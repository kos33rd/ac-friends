import { createStore, createApi } from 'effector'

const profile = createStore({})

export const { loadProfile } = createApi(profile, {
  loadProfile: (state, profile) => profile
})

export default profile
