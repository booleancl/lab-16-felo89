<template>
  <div class="other">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Soy otro componente',
    };
  },
};
</script>

<style>
.other {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: green;
}
</style>