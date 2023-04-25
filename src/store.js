import { createStore, createLogger } from "vuex";
import router from "./router/index";

const store = createStore( {
  state:{
    username:"",
    name: "",
    cargo: "",
    id: ""
  },

  getters:{},

  mutations:{
    login(state, data){

      state.username= data.username;
      state.name = data.name;
      state.id = data.id;

      localStorage.setItem('username',data.username);
      localStorage.setItem('name',data.name);
      localStorage.setItem('id',data.id);
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
      if(localStorage.getItem('name')){
        state.name = localStorage.getItem('name');
      }
      if(localStorage.getItem('id')){
        state.id = localStorage.getItem('id');
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
