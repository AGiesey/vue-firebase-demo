<template>
  <div id="app">
    <Nav />
    <blood-pressure-page />
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import BloodPressurePage from './components/BloodPressurePage.vue';

export default {
  name: 'App',
  components: {
    Nav,
    BloodPressurePage
  }
}
</script>

