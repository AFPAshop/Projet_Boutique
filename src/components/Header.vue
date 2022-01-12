<template>
  <header class="py-3">
    <div class="container-md d-flex justify-content-between align-items-center">
      <h2 class="text-white">Nom du commerce</h2>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a style="color: azure" class="nav-link active" href="#"
            >Categorie1</a
          >
        </li>
        <li class="nav-item">
          <a style="color: azure" class="nav-link active" href="#"
            >Categorie2</a
          >
        </li>
        <li class="nav-item">
          <a style="color: azure" class="nav-link active" href="#"
            >Categorie3</a
          >
        </li>
        <li class="nav-item">
          <a style="color: azure" class="nav-link active" href="#"
            >Categorie4</a
          >
        </li>
      </ul>
      <router-link to="/cardDetails" class="text-decoration-none">
        <h2 class="text-white cursor">
          <i class="fas fa-shopping-cart mx-1"></i>
          {{ this.$store.state.card.length }}
        </h2>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      items: 0,
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
header {
  background-color: #08183f;
  h2 {
    text-shadow: -1px 3px 2px rgba(0, 0, 0, 0.3);
    &.cursor {
      cursor: pointer;
    }
  }
}
</style>