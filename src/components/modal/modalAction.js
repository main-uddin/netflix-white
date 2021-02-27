export const IS__MODAL__OPEN = 'IS__MODAL__OPEN'
export const SET__MODAL__DATA = 'SET__MODAL__DATA'

export const isOpenModalAction = data => ({
  type: IS__MODAL__OPEN,
  payload: data
})

export const setModalAction = data => ({
  type: SET__MODAL__DATA,
  payload: data
})
