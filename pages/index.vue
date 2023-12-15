<!--Page d'accueil de la startup-->
<script setup>
const query = gql`
  query PageAccueil {
    page(where: {slug: "accueil"}) {
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
</script>

<template>
  <div>
    <h2>{{ contenuAccueil.titre }}</h2>
    <div v-html="contenuAccueil.texte.html"></div>

    <!-- Lien vers la page Produits.vue -->
    <router-link to="produits" exact exact-active-class="active">Produits</router-link>
  </div>
</template>