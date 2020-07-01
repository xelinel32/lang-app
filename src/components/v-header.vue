<template>
  <div class="v-header">
    <v-navigation-drawer
      absolute
      temporary
      v-model="drawer"
      class="hidden-md-and-up"
    >
      <v-list>
        <v-list-item to="/books" exact-active-class="active">
          <v-list-item-icon>
            <v-icon left>mdi-book</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Read</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/learn" exact-active-class="active">
          <v-list-item-icon>
            <v-icon left>mdi-book</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Learn word</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="'/profile/' + id" exact-active-class="active">
          <v-list-item-icon>
            <v-icon left>mdi-face-profile</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item block to="/login" exact-active-class="active">
          <v-list-item-icon>
            <v-icon left>mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Log in</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/register" exact-active-class="active">
          <v-list-item-icon>
            <v-icon left>mdi-cellphone-lock</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block to="/logout?message=logout"
            >Logout
            <v-icon> <v-icon left>mdi-login-variant</v-icon></v-icon>
          </v-btn>
        </div>
      </template>
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
          <v-btn to="/books" text class="primary" exact-active-class="active">
            <v-icon left>mdi-book</v-icon>
            Read
          </v-btn>
          <v-btn to="/learn" text class="primary" exact-active-class="active">
            <v-icon left>mdi-book</v-icon>
            Learn word
          </v-btn>
          <v-btn
            :to="'/profile/' + id"
            text
            class="primary"
            exact-active-class="active"
          >
            <v-icon left>mdi-face-profile</v-icon>
            Profile
          </v-btn>
          <v-btn
            to="/logout?message=logout"
            text
            class="primary"
            exact-active-class="active"
          >
            <v-icon left>mdi-login-variant</v-icon>
            Logout
          </v-btn>
          <v-btn to="/login" text class="primary" exact-active-class="active">
            <v-icon left>mdi-login</v-icon>
            Log in
          </v-btn>
          <v-btn
            to="/register"
            text
            class="primary"
            exact-active-class="active"
          >
            <v-icon left>mdi-cellphone-lock</v-icon>
            Register
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
    drawer: false,
    id: '123',
  }),
  computed: {},
};
</script>

<style lang="scss" scoped></style>
