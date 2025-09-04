import { create } from "zustand";

export const useHomePageStore = create((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}));
