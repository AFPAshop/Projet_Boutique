<template>

    <div id="app">
      <form>
      <label for="nom_produit">Entrez le nom du produit à ajouter : </label>
      <input type="text" name="nom_produit" id="nom_produit" required>

      <label for="prix">Entrez le prix du nouveau produit : </label>
      <input type="text" name="prix" id="prix" required>

      <label for="image">Choisissez l'image du nouveau produit : </label>
      <input type="file" name="image" id="image">

      <label for="stock">Indiquez le stock de départ : </label>
      <input type="number" name="stock" id="stock" required>

      <label for="dlc">Validité du produit : </label>
      <input type="date" name="dlc" id="dlc">

      <label for="id_TVA">Indiquez le taux de TVA : </label>
      <select name="tva" id="id_TVA">
        <option value="">--Sélectionnez un taux--</option>
        <option v-for="tva in tvacomplet" :key="tva.taux" value=tva.id>{{ tva.taux }} %</option>
      </select>

      <label for="id_CATEGORIE">Catégorie du produit : </label>
      <select name="categorie" id="id_CATEGORIE">
        <option value="">--Indiquez la catégorie--</option>
        <option v-for="cat in categories" :key="cat.nom_categorie" value=cat.id>{{ cat.nom_categorie }}</option>
      </select>

      <input type="submit" value="Valider">
      </form>
    </div>
  
</template>

<script>

export default {
  data:{
    return {
      tvacomplet:[],
      categories:[]
  }},

  methods: {  
    insererProduit() {
      axios.post('adresse_de_la_bdd',{
            data: {
              nom_produit: this.nom_produit,
              image: this.image,
              prix: this.prix,
              stock: this.stock,
              dlc: this.dlc,
              id_TVA: this.tva.id,
              id_CATEGORIE: this.cat.id,
            }
          })
        },

  mounted(){

    lireTVA() {
      axios.get(state.url + '/tva/getAll).then(response => (this.tvacomplet = response))
    },

    lireCategories() {
      axios.get(state.url + '/categories/getAll).then(response => (this.categories = response))
    }
  }
}

</script>

<style>



</style>