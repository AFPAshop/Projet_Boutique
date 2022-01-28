<template>
  <div id="app">
    <h1>Page des TVA</h1>

    <table>
      <tr>
        <td>Id</td>
        <td>Type</td>
        <td>Taux</td>
      </tr>
      <tr v-for="t in this.$shop.state.tva" :key="t.id">
        <td>{{ t.id }}</td>
        <td>{{ t.taux }}</td>
        <td>{{ t.tva_name }}</td>
        <td><button @click="showTva(t.id)">Modif</button></td>
        <td><button>Suppr.</button></td>
      </tr>
    </table>
    <div v-if="Show == true">
      <div v-for="t in this.$shop.state.tva" :key="t.id">
        <div v-if="id == t.id">
          <!-- <input v-model="nom" :value="t.nom" type="text" /> -->
          <!-- <input v-model="taux" :value="t.taux" type="number" /> -->
          <button @click="modifTva(t.id)">Modif</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      id: "",
      nom: "",
      taux: "",
    };
  },
  methods: {
    showTva(id) {
      this.show = true;
      this.id = id;
    },
    updateTva(id) {
      axios
        .put(this.$shop.state.url + "/tva/update/" + id, {
          nom: this.nom,
          taux: this.taux,
        })
        .then((res) => res.json(console.log("Produit modifié")))
        .catch((err) => res.json(err));
    },
  },
};
</script>

<style scoped>
</style>
