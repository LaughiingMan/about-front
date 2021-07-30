<template>
  <v-app id="app">
    <v-img src="@/assets/banner.gif">
      <v-row align="start">
        <About />
      </v-row>
      <v-row align="center" style="height: 50%;">
        <v-col
            cols="12"
            md="4"
        >
          <v-card
              dark
              outlined
              color="transparent"
              class="mx-auto"
              max-width="600"
          >
            <v-card-text>
              <div></div>
              <p class="text-h4 text--white">
                Козах петух, саси бибу
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="end" style="height: 25%;">
        <Navigation />
      </v-row>
    </v-img>
<!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
  </v-app>
</template>

<script>
import About from '@/components/About.vue'
import Navigation from "@/components/Navigation.vue";

export default {
  components: {Navigation, About },
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
