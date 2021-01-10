<template>
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
      id="carousel"
      height="90vh"
      cycle
    >
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <v-sheet height="100%" color="red darken-3" dark tile>
          <v-layout wrap style="height: 100%" align-center>
            <v-flex xs12 md6 class="pa-10">
              <h1>{{ item.title }}</h1>
              <p style="font-size: 18px" class="pt-4">{{ item.subtitle }}</p>
            </v-flex>
            <v-flex xs12 md6 class="text-right d-none d-md-block">
              <v-img
                :src="`${ item.img }.png`"
                alt="Banner umalib information"
                height="520"
                contain
              />
            </v-flex>
          </v-layout>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  props: {
      items: Array
  }
}
</script>