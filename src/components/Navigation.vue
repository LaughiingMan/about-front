<template>
  <v-content>
    <v-container fluid>

      <v-tabs
          centered
          dark
          background-color="transparent"
          slider-color="green"
      >
        <v-tab
            ripple
            v-for="tab in tabs"
            :key="tab"
        >
          {{ tab.name }}
        </v-tab>
      </v-tabs>
      <tabs tabs="tabs"/>
<!--      <v-tab-item>-->
<!--        <Confirmation/>-->
<!--      </v-tab-item>-->
<!--      <v-tab-item>-->
<!--        <Notification/>-->
<!--      </v-tab-item>-->
<!--      <v-tab-item>-->
<!--        <Toast/>-->
<!--      </v-tab-item>-->
    </v-container>
  </v-content>
</template>

<script>
import Tabs from "./Tabs.vue";

export default {
  name: "Navigation",
  components: { Tabs },
  data: () => ({
    tabs: [
      {
        name: 'Проекты'
      },{
        name: 'Сервисы'
      },{
        name: 'Боты'
      }
    ]
  })
}
</script>

<style scoped>

</style>