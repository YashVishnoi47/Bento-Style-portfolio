import { create } from "zustand";

export const useHomePageStore = create((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),

  openDialog: false,
  setOpenDialog: () => set((openDialog) => ({ openDialog: !openDialog.openDialog })),


  pageLink: "Home",
  setPageLink: () => set((pageLink) => ({ pageLink: pageLink.pageLink })),
}));
