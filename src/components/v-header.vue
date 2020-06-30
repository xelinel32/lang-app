<template>
  <div class="v-header">
    <v-navigation-drawer
      absolute
      temporary
      v-model="drawer"
      class="hidden-md-and-up"
    >
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.route"
            exact-active-class="active"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-toolbar dark color="primary">
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title v-text="'Lang App'"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            :to="item.route"
            text
            class="primary"
            exact-active-class="active"
          >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'v-header',
  data: () => ({
    menuItems: [
      {
        title: 'Read',
        route: '/books',
        icon: 'mdi-book',
      },
      {
        title: 'Learn word',
        route: '/learn',
        icon: 'mdi-file-word-box',
      },
      {
        title: 'Profile',
        route: '/profile',
        icon: 'mdi-face-profile',
      },
      {
        title: 'Logout',
        route: '/logout',
        icon: 'mdi-login-variant',
      },
      {
        title: 'Log in',
        route: '/login',
        icon: 'mdi-login',
      },
      {
        title: 'Register',
        route: '/register',
        icon: 'mdi-cellphone-lock',
      },
    ],
    drawer: false,
  }),
};
</script>

<style lang="scss" scoped></style>
