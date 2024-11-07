import { create } from "zustand";

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

/////запрос user
let user = (set) => ({
  user: {},
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
      const response = await fetch(
        "https://portal.rrgroup.solutions/api/",
        requestOptions
      );
      const result = await response.json();

      set({
        user: {
          first_name: result.data.first_name,
          last_name: result.data.last_name,
          avatar: result.data.avatar,
        },
        error: null,
      });
    } catch (error) {
      console.log("error", error);

      set({
        categories: [],
        error: "Ошибка при получении данных",
      });
    } finally {
      set({ loading: false });
    }
  },
  getUsers: async () => {
    await user(set).requestData("get-user");
  },
});

export const useUser = create(user);

///// Запрос категории

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
      const response = await fetch(
        "https://portal.rrgroup.solutions/api/",
        requestOptions
      );
      const result = await response.json();

      if (result.message === "reloadPage") {
        window.location.reload();
        return;
      }

      set({
        categories: [result.data.sections],
        error: null,
      });
    } catch (error) {
      console.log("error", error);

      set({
        categories: [],
        error: "Ошибка при получении данных",
      });
    } finally {
      set({ loading: false });
    }
  },

  getCategories: async () => {
    // await categories(set).requestData("get-sections");
    await categories(set).requestData("dev_get_sections");
  },
  getUsers: async () => {
    await categories(set).requestData("get-user");
  },
  reloadPage: async () => {
    await categories(set).requestData("log-out");
  },
});

export const useCategories = create(categories);

//// получение url для iframe

let iframe = (set) => ({
  iframeUrl: {},
  loading: false,
  error: null,

  requestData: async (id) => {
    set({ loading: true });

    const formdata = new FormData();
    formdata.append("action", "get-iframe-src");
    formdata.append("tool_id", id);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://portal.rrgroup.solutions/api/",
        requestOptions
      );
      const result = await response.json();

      set({
        iframeUrl: result,
        error: null,
      });
    } catch (error) {
      console.log("error", error);

      set({
        categories: [],
        error: "Ошибка при получении данных",
      });
    } finally {
      set({ loading: false });
    }
  },
  getIframeUrl: async (id) => {
    await iframe(set).requestData(id);
  },
});

export const useIframe = create(iframe);
