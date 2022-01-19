<template>
    <div id="app">
      <div class="header">
        <div class="logo">
          <router-link to="/admin/compteBoutique">
            <p><img src="#"></p>
            <p>Compte boutique</p>
          </router-link>
        </div>
        <div class="logo">
          <router-link to="/admin/logout">
            <p><img src="#"></p>
            <p>Logout</p>
          </router-link>  
        </div>
      </div>
        <div class="container">
          <div class="banner">
            <img src="#">
          </div>
            <router-link to="/admin/produits">
              <button class="btn btn-outline-light btn-lg px-5">Produits</button>
            </router-link>

            <router-link to="/admin/stock">
              <button class="btn btn-outline-light btn-lg px-5">Stock</button>
            </router-link>

            <router-link to="/admin/tva">
            <button class="btn btn-outline-light btn-lg px-5">TVA</button>
            </router-link>

            <router-link to="/admin/commande">
              <button class="btn btn-outline-light btn-lg px-5">Commande</button>
            </router-link>

            <router-link to="/admin/compteClient">
              <button class="btn btn-outline-light btn-lg px-5">Compte client</button>
            </router-link>

            <router-link to="/admin/association">
              <button class="btn btn-outline-light btn-lg px-5">Association</button>
            </router-link>
            
            
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {}
</script>

<style scoped>
.header {display: inline-block; text-align: right; width:1000px}
.logo { display:inline-block; margin-right:10px; text-align: center}
img {width:190px; heigth: 190px; margin-bottom:10px}
.banner {}
.container {float: left; width : 200px}
</style>
