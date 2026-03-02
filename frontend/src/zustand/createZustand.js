import { create } from 'zustand'
import getData from '../utils/getData.js'

const products = await getData()

const useProduct = create((set) => ({

    data: products['result'],
    cart: [],
    addItem: (obj) => {
        console.log(obj);

        set((state) =>

            ({cart: [...state.cart, obj]}))
    },
    removeItem: (obj) => set((state) => ({ cart: state.cart.filter((ob) => ob.id !== obj.id) }))
}))

export default useProduct