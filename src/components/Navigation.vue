<template>
  <v-content>
    <v-container fluid>

      <v-tabs
          centered
          dark
          background-color="transparent"
          slider-color="green"
      >
        <v-tab ripple>
          Проекты
        </v-tab>
        <v-tab ripple>
          Сервисы
        </v-tab>
        <v-tab ripple>
          Боты
        </v-tab>
        <v-tab-item>
          <Confirmation/>
        </v-tab-item>
        <v-tab-item>
          <Notification/>
        </v-tab-item>
        <v-tab-item>
          <Toast/>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>