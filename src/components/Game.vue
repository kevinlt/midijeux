<template>
    <div>
      <h4>{{game.titre}}</h4>
    </div>
</template>

<script>
export default {
  props: {
    game: {
      id: '',
      minPlayers: 0,
      maxPlayers: 0,
      time: 0,
      type: [],
    },
  },
};

</script>

<style lang="scss" scoped>

</style>
