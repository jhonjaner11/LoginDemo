<template>
  <v-app>
    <v-app-bar density="compact"  :elevation="13" color="deep-purple-darken-3" app dark>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>Mascafe    {{$store.state.username}}</v-toolbar-title>

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
          <template v-slot:prepend>
            <v-icon :icon="item.icon" :color="item.color"></v-icon>
          </template>
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
        icon: "mdi-home",
      },
      {
        title: "Registrar Venta",
        value: "sales",
        to: "/sale-record",
        icon: "mdi-cash-register",
        color: 'green'
      },
      {
        title: "Stock",
        value: "stock",
        to: "/stock-list",
        icon: "mdi-package-variant",
      },
      {
        title: "Productos",
        value: "foo",
        to: "/product-list",
        icon: "mdi-food",
      },
      {
        title: "Categorias",
        value: "foo",
        to: "/categories",
        icon: "mdi-shape",
      },
      {
        title: "Provedores",
        value: "foo",
        to: "/provedor-list",
        icon: "mdi-account-tie",
      },
      {
        title: "Entregas",
        value: "foo",
        to: "/delivery",
        icon: "mdi-account-tie",
      },
      {
        title: "Facturas",
        value: "sales",
        to: "/sales",
        icon: "mdi-cash",
      },
      {
        title: "Reportes",
        value: "foo",
        to: "/reports",
        icon: "mdi-chart-line",
      },


      {
        title: "Usuarios",
        value: "users",
        to: "/users",
        icon: "mdi-clipboard-account",
      },


      {
        title: "About",
        value: "bar",
        to: "/about",
        icon: "mdi-fire",
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
