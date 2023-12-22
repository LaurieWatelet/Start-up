<!--Page des produits de la startup-->
<script setup>
const query = gql`
query ProduitProduits {
  produit (where: {slug: "produits"}) {
    id
    slug
    titre
    texte {
      html
    }
  }
}
`;
const contenuProduits = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuProduits.value = data.value.produit;
</script>
<template>
  <div>
    <h2>{{ contenuProduits.titre }}</h2>
    <div v-html="contenuProduits.texte.html"></div>
  </div>
</template>