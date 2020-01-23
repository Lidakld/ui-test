<template>
  <v-container fluid>
    <v-layout row wrap>
    <p>Lida</p>
      <v-flex xs12 sm12 md6 lg4 v-for="img in imgSet" :key="img">
          <ImgComponent :input="img"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import ImgComponent from '~/components/ImgComponent.vue'
import loadImgsAPI from './../src'

export default {
  components: {
    ImgComponent
  },
  data(){
    return {
      imgSet: []
    }
  },
  mounted() {
    this.loadImgs();
  },
  methods: {
    async loadImgs() {
      try {
          const imgs = await loadImgsAPI();
          this.search(imgs);
      } catch (err) {
          console.log(err);
      }
    },
    search(imgs){
      var result = imgs.filter(img =>  img.albumId === 30);
      this.imgSet = result;
    }
  },

}
</script>
