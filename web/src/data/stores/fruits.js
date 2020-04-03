import { createStore, createEffect } from 'effector'
import api from '~/data/api'

// Fetch fruits list
export const fetchFruits = createEffect({
  handler: () => api.get('fruits').then((res) => res.data),
})

export const $fruits = createStore([])
export const $fruitsLoadingError = createStore(false)
export const $fruitsIsLoading = fetchFruits.pending

$fruitsLoadingError.on(fetchFruits.fail, (store, err) => err)
$fruits.on(fetchFruits.done, (store, { result }) => result)
