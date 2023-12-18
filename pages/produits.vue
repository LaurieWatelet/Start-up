<script setup>
const query = gql`
query Produits {
  page(where: {slug: "produit"}) {
    createdAt
    id
    slug
    titre
    updatedAt
    texte {
      html
    }
  }
}
`;
const contenuProduit = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuProduit.value = data.value.page;
</script>
 
<template>
  <h2>
    {{contenuProduit.titre}}
  </h2>
 
  <div v-html="contenuProduit.texte.html">
  </div>
 
</template>