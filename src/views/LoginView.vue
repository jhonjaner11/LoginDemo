<template >


  <v-container fluid fill-height id="appa"  v-bind:style="{ backgroundColor: color}">
    <v-row align-center justify-center>
      <v-col>
        <v-card   max-width="400" class="mx-auto" >
          <v-img
          class="align-end text-white"
          height="200"
          src="@/assets/background.jpg"
          cover
          />
          <v-card-title primary-title>
            Login
          </v-card-title>
          <v-card-text>
           <v-text-field
            name="username"
            label="Usuario"
            id="username"
            v-model="username"
           ></v-text-field>
           <v-text-field
           name="password"
           label="Contraseña"
           id="password"

           v-model="password"

          ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" @click="login">Loggin</v-btn>
            <v-btn color="red">Logout</v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>

  </v-container>


</template>


<script>

export default {
  name: "appa",
  data() {
    return {
      back : "background-image: url('./public/background.jpg');",
      color:'#000000',
      username: '',
      password:'',
    }
  },
  methods:{
    login(){
      this.$store.commit('login', this.username);

    }
  }
}
</script>


<style>
/* CUSTOM STYLE */
#content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0px solid lightgray;
  padding: 4rem 4rem;



}
.background {
  height: 100%;
  margin: 0;
  padding: 0;

}




#appa {
  display: flex;
  height: 100%;

}


.container {
  width: 400px;
  max-width: 95%;
}
.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.input > label {
  text-align: start;
}
.input > input {
  margin-top: 6px;
  height: 38px !important;
}

</style>
