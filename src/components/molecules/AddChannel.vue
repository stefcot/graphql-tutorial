<template>
  <div class="addchannel-cmp">
    <input type="text" placeholder="New channel" @keyup="onKeyUp" />
  </div>
</template>

<script>
import ADD_CHANNEL_MUTATION from '@/graphql/AddChannelMutation.graphql';
import CHANNEL_LIST_QUERY from '@/graphql/ChannelListQuery.graphql';

export default {
  name: 'AddChannel',
  methods: {
    onKeyUp(VueEvent) {
      const event = VueEvent;
      if (VueEvent.keyCode === 13) {
        this.$apollo.mutate({
          mutation: ADD_CHANNEL_MUTATION,
          variables: {
            name: event.target.value,
          },
          update(store, { data: { addChannel } }) {
            const { id, name } = addChannel;
            // Read the data from our cache for this query.
            const data = store.readQuery({ query: CHANNEL_LIST_QUERY });
            // Add our tag from the mutation to the end
            data.channels.push({ id, name });
            // Write our data back to the cache.
            store.writeQuery({ query: CHANNEL_LIST_QUERY, data });
          },
          optimisticResponse: {
            __typename: 'Mutation',
            addChannel: {
              __typename: 'Channel',
              id: -1,
              name: event.target.value,
            },
          },
        });

        event.target.value = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.addchannel-cmp {
  position: relative;

  input {
    @extend %menu-list-item;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    -webkit-appearance: none;
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    color: $grey;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: $grey;
    mask-image: url('~@/assets/plus-sign.svg');
    display: inline-block;
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    width: 1.4rem;
    height: 1.4rem;
    margin: 0;
    z-index: 2;
  }
}

</style>
