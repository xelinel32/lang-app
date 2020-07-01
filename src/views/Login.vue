<template>
  <div class="login">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12 mt-5">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-alert type="warning" v-if="error != null">
              {{ error }}
            </v-alert>
            <v-form>
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                required
                v-model.trim="email"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                required
                v-model.number="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              tile
              class=" primary white--text pa-2"
              :disabled="disable"
              @click.prevent="login"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
  }),
  computed: {
    error() {
      return this.$store.getters.GET_ERROR;
    },
    disable() {
      return this.$store.getters.GET_PROCESSING;
    },
    isAuth() {
      return this.$store.getters.GET_INFO;
    },
  },
  methods: {
    async login() {
      this.email = this.password = '';
      try {
        await this.$store.dispatch('LOGIN', {
          email: this.email,
          password: this.password,
        });
        this.$router.push('/');
      } catch (e) {}
    },
  },
};
</script>

<style lang="scss" scoped></style>
