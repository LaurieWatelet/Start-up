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

    <!-- Autres contenus de la page d'accueil -->

    <!-- Encadré avec un CTA direction la page produits-->
    <div class="bg-gray-200 p-8 my-8">
      <h2 class="text-3xl font-bold mb-4">Découvrez nos produits et services</h2>
      <p class="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac libero quis justo dignissim tincidunt. Aenean vel massa id elit euismod imperdiet.</p>
      <NuxtLink to="/produits/produits" class="bg-blue-500 text-white px-6 py-3 rounded bg-blue-700 transition duration-300 ease-in-out inline-block">
        Voir nos produits
      </NuxtLink>
    </div>


  </div>
</template>
