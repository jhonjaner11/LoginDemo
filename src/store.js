import { createStore, createLogger } from "vuex";
import router from "./router/index";

const store = createStore( {
  state:{
    username:"",
    name: "",
    cargo: "",
  },

  getters:{},

  mutations:{
    login(state, username){
      state.username= username;
      localStorage.setItem('username',username);
      router.push('/')
    },

    logout(state){
      state.username="";
      localStorage.removeItem('username');
      router.push('/login')
    },

    initializerStore(state){
      if(localStorage.getItem('username')){
        state.username = localStorage.getItem('username');
      }
    }

  },

  actions:{

  },
  modules:{

  },

  plugins:[createLogger()]

});

export default store;
