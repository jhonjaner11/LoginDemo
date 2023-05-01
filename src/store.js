import { createStore, createLogger } from "vuex";
import router from "./router/index";

const store = createStore( {
  state:{
    username:"",
    name: "",
    id: "",
    rol: ""
  },

  getters:{},

  mutations:{
    login(state, data){

      state.username= data.username;
      state.name = data.name;
      state.id = data.id;
      state.rol = data.rol

      localStorage.setItem('username',data.username);
      localStorage.setItem('name',data.name);
      localStorage.setItem('id',data.id);
      localStorage.setItem('rol',data.rol);
      console.log("mutation");
      console.log(data.rol);

      if (data.rol=='Cajero') {

        router.push('/sale-record')
      }else{
        router.push('/')
      }


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
      if(localStorage.getItem('rol')){
        state.rol = localStorage.getItem('rol');
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
