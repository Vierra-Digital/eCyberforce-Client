import { create } from "zustand";

interface State {
  opened: boolean;
  openModal: any;
  closeModal: any;
}

const useModalStore = create<State>((set) => ({
  opened: false,
  openModal: () => set({ opened: true }),
  closeModal: () => set({ opened: false }),
}));

export default useModalStore;
