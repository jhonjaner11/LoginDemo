<template>
  <v-app>
    <v-app-bar density="compact"  :elevation="13" color="brown" app dark>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Mascafe</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-export" to='login'></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
          :to="item.to"
          router
        >
          <!-- <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template> -->
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script >
  // import DefaultView from './View.vue';
  export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Home",
        value: "foo",
        to: "/",
      },
      {
        title: "Stock",
        value: "foo",
        to: "/stock",
      },
      {
        title: "Ventas",
        value: "sales",
        to: "/sales",
      },


      {
        title: "Usuarios",
        value: "users",
        to: "/users",
      },
      {
        title: "About",
        value: "bar",
        to: "/about",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
