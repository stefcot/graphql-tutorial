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
    <main>
      <channel-list />
    </main>
  </div>
</template>

<script>
import ChannelList from 'molecules/ChannelList';
import logo from '../assets/logo.svg';

export default {
  name: 'App',
  components: {
    ChannelList,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>
