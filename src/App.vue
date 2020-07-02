<template>
  <v-app>
    <vHeader />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <vFooter />
  </v-app>
</template>
<script>
import vHeader from '@/components/v-header';
import vFooter from '@/components/v-footer';
import fb from 'firebase/app';
import 'firebase/auth';
export default {
  name: 'App',
  components: {
    vHeader,
    vFooter
  }
};
</script>
<style lang="scss"></style>
