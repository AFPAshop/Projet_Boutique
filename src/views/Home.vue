<template>
  <div>
    <Header />
    <Products />
    <!-- <Products2 /> -->
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Products from "../components/Products.vue";
import Products2 from "../components/Products2.vue";

export default {
  name: "Home",
  components: { Header, Products, Products2 },
};
</script>

    