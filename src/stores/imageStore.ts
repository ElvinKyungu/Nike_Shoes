import { defineStore } from 'pinia';
import shoe1 from "@/assets/shoe1.png";
import shoe2 from "@/assets/shoe2.png";
import shoe3 from "@/assets/shoe3.png";
import shoe4 from "@/assets/shoe4.png";
export const useImageStore = defineStore('image', {
  state: () => ({
    selectedImageUrl: shoe1,
    images: [
      { id: 1, imgUrl: shoe1 },
      { id: 2, imgUrl: shoe2 },
      { id: 3, imgUrl: shoe3 },
      { id: 4, imgUrl: shoe4 },
    ],
  }),
  getters: {
    selectedImage: (state) => {
      return state.images.find(image => image.imgUrl === state.selectedImageUrl);
    },
  },
  actions: {
    setSelectedImageUrl(url: string) {
      this.selectedImageUrl = url;
    },
  },
});