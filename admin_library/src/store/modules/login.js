import { getStore, removeStore, setStore } from "@/util/store";
import { cancelToken, generateToken } from "@/api/user";

const user = {
    state: { 
      user: getStore({ name: "user" }) || "",
      token: getStore({ name: "token" }) || ""
    },
    actions: {
      GenerateToken({ commit }, form) {
        //console.log(form.user)
        let user = {
          name: form.user.username, 
        }; 
        return new Promise((resolve, reject) => {
          generateToken(user)
            .then(res => {
              console.log("generateToken res.data::", res.data);
              const data = res.data;
              commit("SET_TOKEN", data.token); 
              commit("SET_USER", data.user);
              resolve();
            })
            .catch(error => {
              reject(error);
            });
        });
      },
      ClearToken({ commit }) {
        //console.log('ClearToken');
        return new Promise((resolve, reject) => {
          cancelToken(getStore({ name: "user" }))
            .then(res => {
              //console.log('ClearToken',res);
              commit("REMOVE_USER");
              commit("REMOVE_TOKEN");
              resolve(res);
            })
            .catch(error => {
              reject(error);
            });
        });
      }
    },
    mutations: {
      SET_USER: (state, user) => {
        state.user = user;
        setStore({ name: "user", content: state.user });
      },
      REMOVE_USER: state => {
        state.user = "";
        removeStore({ name: "user" });
      },
      SET_TOKEN: (state, token) => {
        state.token = token;
        setStore({ name: "token", content: state.token });
      },
      REMOVE_TOKEN: state => {
        state.token = "";
        removeStore({ name: "token" });
      }
    }
  };
  
  export default user;
  