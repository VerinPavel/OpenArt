//// СКРЫТИЕ HEADER
import { create } from "zustand";

let HeaderActive = (set) => ({
  headerActive: true,

  setHeaderState: (newState) => {
    set(() => ({
      headerActive: newState,
    }));
  },
});

export const useHeaderActive = create(HeaderActive);
