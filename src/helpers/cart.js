const key = 'cart'

export const getCart = () => JSON.parse(localStorage.getItem(key))

export const setCart = (data) => localStorage.setItem(key, JSON.stringify(data))

export const checkProduct = (list, currentProductId) => list.some((item) => item.id === currentProductId)