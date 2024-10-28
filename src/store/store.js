
import { create } from 'zustand';

// let categories = (set) => ({
//   categories: [],
//   loading: false,
//   error: null,

//   getCategories: async () => {
//     set({ loading: true });

   

//     const formdata = new FormData();
//     formdata.append("action", "get-sections");

//     const requestOptions = {
//       method: "POST",
//       body: formdata,
//       redirect: "follow",
//     };

//     try {
//       const response = await fetch("https://portal.rrgroup.solutions/api/", requestOptions);
//       const result = await response.json();

//       set({
//         categories: [result.data.sections],
//         error: null
//       });
//     } catch (error) {
//       console.log("error", error);
      
//       set({
//         categories: [],
//         error: 'Ошибка при получении данных'
//       });
//     } finally {
//       set({ loading: false });
//     }
//   },
// });

let categories = (set) => ({
  categories: [],
  loading: false,
  error: null,

  requestData: async (action) => {
    set({ loading: true });

    const formdata = new FormData();
    formdata.append("action", action);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://portal.rrgroup.solutions/api/", requestOptions);
      const result = await response.json();

      if (result.message === "reloadPage") {
        window.location.reload();
        return;
      }

      set({
        categories: [result.data.sections],
        error: null
      });
    } catch (error) {
      console.log("error", error);
      
      set({
        categories: [],
        error: 'Ошибка при получении данных'
      });
    } finally {
      set({ loading: false });
    }
  },

  getCategories: async () => {
    await categories(set).requestData("get-sections");
  },
  getUsers: async () => {
    await categories(set).requestData("get-users");
  },
  reloadPage: async () => {
    await categories(set).requestData("log-out");
  }
});

export const useCategories = create(categories);

let HeaderActive = (set) => ({
  headerActive: true,

  setHeaderState: () => {
    set((state) => {
      const newHeaderActive = !state.headerActive;
      // console.log(newHeaderActive); 
      return { headerActive: newHeaderActive };
    });
  },
})

export const useHeaderActive = create(HeaderActive)
