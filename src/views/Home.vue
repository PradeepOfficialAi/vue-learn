<template>
  <div>
    <cart-system />
    <user-system />
  </div>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'
  import CartSystem from '../components/cart-system.vue'
  import UserSystem from "../components/user-system.vue";

  export default {
    name: 'Home',

    components: {
      CartSystem,
      UserSystem
    },
  }
</script>
