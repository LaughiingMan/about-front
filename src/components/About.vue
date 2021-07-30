<template>
  <v-container>
    <v-row class="text-center" justify="end" align="center">
      <v-col
          cols="1"
          md="1"
      >
        <v-btn
            class="mt-12"
            icon
            outlined
            large
            color="white"
        >
          <v-img src="@/assets/links/github.png" />
        </v-btn>
        <div class="white--text mt-2">
          Github
        </div>
      </v-col>
      <v-col
          cols="1"
          md="1"
      >
        <v-btn
            class="mt-12"
            icon
            color="white"
        >
          <v-img src="@/assets/links/vk.png" />
        </v-btn>
        <div class="white--text mt-2">
          VK
        </div>
      </v-col>
      <v-col
          cols="1"
          md="1"
      >
        <v-btn
            class="mt-12"
            icon
            color="white"
        >
          <v-img src="@/assets/links/discord.png" />
        </v-btn>
        <div class="white--text mt-2">
          Discord
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>