<template>
  <ul>
    <li>Channel 1</li>
    <li>Channel 2</li>
  </ul>
</template>

<script>
import ChannelListQuery from '@/graphql/ChannelListQuery.graphql';

export default {
  name: 'ChannelList',
  data() {
    return {
      channelList: null,
    };
  },
  apollo: {
    channelList: {
      query: ChannelListQuery,
      manual: true,
      result({ data, loading, networkStatus }) {
        console.log('apollo.queries.channelList - data: ', data);
        console.log('apollo.queries.channelList - loading: ', loading);
        console.log('apollo.queries.channelList - networkStatus: ', networkStatus);
      },
      error(error) {
        console.error('apollo.queries.channelList - error: ', error);
      },
    },
  },
};
</script>

<style lang="scss" scoped>

ul {
  list-style: none;
  min-width: 150px;
  max-width: 300px;
  flex: 0 1;
  margin: 0;
  padding: 0;
}

li {
  font-family: $open-sans;
  font-size: 1.4rem;
  line-height: 1.2;
  padding: 4px 0;
  color: $white;
  border-top: 1px solid $white;

  &:last-of-type {
    border-bottom: 1px solid $white;
  }
}

</style>
