import { createStore, createEffect } from 'effector'
import api from '~/data/api'

// Profile fetch
export const fetchProfile = createEffect({
  handler: () => api.get('profile/').then((res) => res.data),
})

export const $profile = createStore({})
export const $profileLoadingError = createStore(false)
export const $isAuthorized = createStore(false)
export const $profileIsLoading = fetchProfile.pending

$profileLoadingError.on(fetchProfile.fail, (store, err) => err)
$profile.on(fetchProfile.done, (store, { result }) => result)
$isAuthorized.on(fetchProfile.done, () => true)
$isAuthorized.on(fetchProfile.fail, () => false)

// Profile update
export const updateProfile = createEffect({
  handler: (profileData) =>
    api.put('profile/', profileData).then((res) => res.data),
})

export const $profileUpdateError = createStore(false)
export const $profileIsUpdated = createStore(false)
export const $profileIsUpdating = updateProfile.pending

$profileUpdateError.on(fetchProfile.fail, (store, err) => err)
$profileIsUpdated.on(fetchProfile.done, () => true)
$profileIsUpdated.on(fetchProfile.fail, () => false)

// Profile bump (TBD)
export const bumpProfile = createEffect({
  handler: () => api.post('profile/bump/', {}).then((res) => res.data),
})
