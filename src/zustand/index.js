import { create } from "zustand";

export let useUserState = create((set) => ({
    user: { name: "" },
    setUser: (data) => set({ user: data }),
}))

// create method ()=>{} ,params set method , update purpose, state: initial, action: ()=>set(data)
export let useCartsState = create((set) => ({
    carts: [],
    setCarts: (data) => set({ carts: data })
}))

export let useCartState = create((set) => ({

}))