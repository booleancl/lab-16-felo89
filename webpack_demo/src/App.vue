<template>
  <div class="app">
    <img :src='image' width='100px'>
    <h1>
      {{ message ? message : 'Hello SFC' }}
    </h1>
    <input type='text' v-model='message'>
  <other></other>
  <other></other>
  <other></other>
  <other></other>
  </div>
</template>

<script>
import Other from './Other.vue'
export default {
  data() {
    return {
      message: '',
      image: 'https://vuejs.org/images/logo.png'
    };
  },
  components: {
    Other
  }
};
</script>

<style>
.app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}
</style>