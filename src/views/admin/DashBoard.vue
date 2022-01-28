<template>
  <div id="app">
    <div class="container">
      <router-link to="/admin/produits">
        <button class="btn btn-outline-success btn-lg px-5">Produits</button>
      </router-link>

      <router-link to="/admin/stock">
        <button class="btn btn-outline-success btn-lg px-5">Stock</button>
      </router-link>

      <router-link to="/admin/tva">
        <button class="btn btn-outline-success btn-lg px-5">TVA</button>
      </router-link>

      <router-link to="/admin/commande">
        <button class="btn btn-outline-success btn-lg px-5">Commande</button>
      </router-link>

      <router-link to="/admin/compteClient">
        <button class="btn btn-outline-success btn-lg px-5">
          Compte client
        </button>
      </router-link>

      <router-link to="/admin/association">
        <button class="btn btn-outline-success btn-lg px-5">Association</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: inline-block;
  text-align: right;
  width: 1000px;
}
.logo {
  display: inline-block;
  margin-right: 10px;
  text-align: center;
}
img {
  width: 190px;
  height: 190px;
  margin-bottom: 10px;
}
.container {
  float: left;
  width: 550px;
  display: flex;
  flex-wrap: wrap;
}
button {
  width: 240px;
  margin-top: 15px;
  margin-left: 15px;
}
</style>
