<template>
  <ul>
    <li v-for="channel in channelList" :key="channel.id">{{ channel.name }}</li>
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
      result({ data, loading, networkStatus }) {
        console.log('apollo.queries.channelList - data: ', data);
        console.log('apollo.queries.channelList - loading: ', loading);
        console.log('apollo.queries.channelList - networkStatus: ', networkStatus);
      },
      error(error) {
        console.error('apollo.queries.channelList - error: ', error);
      },
      update: (data) => {
        console.log('apollo.queries.channelList.update - data.channels: ', data.channels);
        // return ChannelAdapter.fromServer(data): use of addapter to transform the object in a ad hoc schema
        return data.channels;
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

p {
  font-family: $open-sans;
  font-size: 1.4rem;
  line-height: 1.2;
}

</style>
