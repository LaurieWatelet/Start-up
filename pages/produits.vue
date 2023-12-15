<!--ici l'idée est de récup les information de slug pour afficher la page produits-->

<script setup>
const query = gql`
  query Produits {
    page(where: {slug: "produits"}) {
    id
    slug
    titre
    texte {
      html
    }
  }
}
`;

const contenuAccueil = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuAccueil.value = data.value.page;
/*ICI SE TROUVE .page*/
</script>

<template>
  <div>
    <div v-html="contenuAccueil.texte.html"></div>
  </div>
</template>
