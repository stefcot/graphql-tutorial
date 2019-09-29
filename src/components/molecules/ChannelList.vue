<template>
  <div class="channels-list-cmp">
    <add-channel></add-channel>
    <div v-for="channel in channelList" :key="channel.id" class="channels-list-cmp__list-item">
      <router-link
        class="channels-list-cmp__list-item-lnk"
        :to="{ name: 'channel-detail', params: { channelId: channel.id} }"
      >
        {{ channel.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import CHANNEL_LIST_QUERY from '@/graphql/ChannelListQuery.graphql';
import AddChannel from '@/components/molecules/AddChannel';

export default {
  name: 'channel-list',
  components: {
    'add-channel': AddChannel,
  },
  data() {
    return {
      channelList: null,
    };
  },
  apollo: {
    channelList: {
      query: CHANNEL_LIST_QUERY,
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
.channels-list-cmp {
  min-width: 150px;
  max-width: 300px;
  flex: 0 1;
  margin: 0;
  padding: 0;

  &__list-item {
    @extend %menu-list-item;
    color: $white;
    position: relative;

    &:last-of-type {
      border-bottom: 1px solid $white;
    }

    &::before {
      content: "";
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: $white;
      mask-image: url("~@/assets/chat.svg");
      display: inline-block;
      mask-size: contain;
      mask-position: center;
      mask-repeat: no-repeat;
      width: 1.8rem;
      height: 1.8rem;
      margin: 0;
      z-index: 2;
    }
  }

  &__list-item-lnk {
    color: $white;
    text-decoration: none;
  }
}

</style>
