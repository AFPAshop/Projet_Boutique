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
        <!-- <li class="nav-item" v-if="Role == 'admin'">
          <router-link to="/admin">
            <a style="color: azure" class="nav-link active" href="#"
              >Home Admin</a
            >
          </router-link>
        </li> -->
      </ul>
      <div>
        <router-link to="CartDetails" class="text-decoration-none">
          <h2 class="text-white cursor">
            <i style="color: #198754" class="fas fa-shopping-cart mx-1"></i>
            {{ this.$store.state.items }}
          </h2>
        </router-link>
      </div>
      <div>
        <router-link to="/admin/compteboutique" class="text-decoration-none">
          <h2 class="text-white cursor">
            <i style="color: #198754" class="fas fa-user"></i>
          </h2>
        </router-link>
      </div>
      <button
        type="button"
        class="btn btn-success"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Login
      </button>
      <!-- <button        
        type="button"
        class="btn btn-success"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Logout
      </button> -->
      <Login />
    </div>
  </header>
</template>

<script>
import Login from "./Login.vue";
export default {
  name: "Header",
  components: { Login },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
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