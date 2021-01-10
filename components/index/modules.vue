<template>
    <v-sheet color="red darken-4" tile class="pa-10 px-0">
      <v-layout justify-center>
        <v-flex xs12 md11>
          <v-sheet class="pa-10 ma-10 mx-0">
            <v-layout wrap>
              <v-flex xs12 md4 v-for="(item, index) in contents" :key="index" class="pa-2">
                <v-card>
                  <v-img :src="item.img" />
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                  <v-card-text v-text="item.text" />
                </v-card>
              </v-flex>
            </v-layout>
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-sheet>
</template>

<script>
export default {
    props: {
        contents: Array
    }
}
</script>