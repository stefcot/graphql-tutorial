<template>
  <div
    id="app"
    class="app"
  >
    <header class="hdr-cmp">
      <div class="hdr-cmp__logo" />
      <h2 class="hdr-cmp__title">
        Vue + GraphQL tutorial
      </h2>
    </header>
    <router-view name="channels"></router-view>
  </div>
</template>

<script>
import logo from '../assets/logo.svg';

export default {
  name: 'App',
  data() {
    return {
      logo,
    };
  },
};
</script>
