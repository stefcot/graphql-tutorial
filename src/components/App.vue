<template>
  <div
    id="app"
    class="app"
  >
    <div class="hdr-cmp">
      <div class="hdr-cmp__logo" />
      <h2 class="hdr-cmp__title">
        Welcome to Apollo
      </h2>
    </div>
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
