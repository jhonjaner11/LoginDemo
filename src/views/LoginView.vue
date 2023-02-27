<template >

<div app id="a">
  <div id="b">
    <div id="content">

        <v-card class="grey  align-center justify-center"
        color="purple-darken-3" dark >
          <v-img
          class="align-end text-white"

          src="@/assets/background.jpg"

          />
          <v-card-title primary-title>
            Login
          </v-card-title>
          <v-card-text>
           <v-text-field
            name="username"
            prepend-icon="mdi-account"
            label="Usuario"
            id="username"
            v-model="username"
           ></v-text-field>
           <v-text-field
           :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
           :rules="[rules.required, rules.min]"
           :type="show1 ? 'text' : 'password'"
           name="password"
           label="Contraseña"
           id="password"
           @click:append="show1 = !show1"

           v-model="password"

          ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" @click="login">Loggin</v-btn>
            <v-btn color="red">Logout</v-btn>
          </v-card-actions>

        </v-card>

      </div>
    </div>
  </div>



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
      show1: false,
        show2: true,

        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
    }
  },
  methods:{
    login(){
      this.$store.commit('login', this.username);

    }
  }
}
</script>


<style >
/* CUSTOM STYLE
#content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0px solid lightgray;
  padding: 4rem 4rem;



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
*/


html, body, #a {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

}

#a {
  display: table;
  vertical-align: bottom;
}

#b {
  display: table-cell;
  margin: 0;
  padding: 0;

  text-align: center;
  vertical-align: "%75";

}

#content {


  margin: auto;


}

</style>
