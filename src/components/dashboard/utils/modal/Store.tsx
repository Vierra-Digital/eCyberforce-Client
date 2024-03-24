import { create } from "zustand";

interface State {
  opened: boolean | number;
  openModal: any;
  closeModal: any;
}

const useModalStore = create<State>((set) => ({
  opened: 0,
  openModal: () => set({ opened: true }),
  closeModal: () => set({ opened: false }),
}));

export default useModalStore;
