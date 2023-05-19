import {create} from 'zustand'
export const useUserStore = create((set) => ({
    user: "",
    setUserData: (data) => set((state) => ({ user:data})),
    removeUserData: () => set({ user: {}})
  }))
  