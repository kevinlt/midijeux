<template>
  <div id="user-games">
    <Game v-for="game in games" :key="game.id" :game="game" :class="game" />
  </div>
</template>

<script>
import Game from '../components/Game.vue';
import api from '../scripts/api';

export default {
  data() {
    return {
      games: [],
    };
  },
  async created() {
    console.error('getgames');
    this.refreshGames();
  },
  components: {
    Game,
  },
  methods: {
    async refreshGames() {
      this.loading = true;
      this.games = await api.getGames();
      this.loading = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
