<template>
  <main>
    <channel-list />
  </main>
</template>

<script>
import ChannelList from 'molecules/ChannelList';

export default {
  name: 'Home',
  components: {
    ChannelList,
  },
};
</script>
