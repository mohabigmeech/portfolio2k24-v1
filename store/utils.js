import { defineStore } from 'pinia';

export const useUtilsStore = defineStore('utils', {
  state: () => ({
    isOffCanvasOpen:false,
    name: ''
  }),
  actions: {
    setIsOffCanvasOpen(){
      this.isOffCanvasOpen = true;
    },
    setOffCanvasClose(){
      this.isOffCanvasOpen = false;
    },
    setName(name) {
      this.name = name;
    }
  },
})