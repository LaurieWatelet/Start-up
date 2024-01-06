<script setup>
const query = gql`
  query Produit($slug: String!) {
    produit(where: { slug: $slug }) {
      id
      nom
      slug
      prix
      description
      createdAt
      publishedAt
      updatedAt
      stage
      image {
        url(
          transformation: {
            image: { resize: { fit: crop, height: 1024, width: 1024 } }
            document: { output: { format: webp } }
          }
        )
      }
    }
  }
`;

const produit = ref();

const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
produit.value = data.value.produit;

</script>

<!--Ce code controle la description quand on clique sur l'image-->

<template>
  <div v-if="produit" class="max-w-xs mx-auto p-4 bg-white rounded-md shadow-md mb-4">
    <NuxtImg :src="produit.image.url" :alt="produit.nom" class="h-auto rounded-md mb-2" />
    <h2 class="text-lg text-center mb-1 font-bold">{{ produit.nom }}</h2>
    <p class="text-gray-700 text-center text-sm mb-2">{{ produit.description }}</p>
    <p class="text-center text-base font-bold">{{ produit.prix }} €</p>
  </div>
  <div v-else class="text-center mt-4">
    <span class="animate-spin text-sm">Loading...</span>
  </div>
</template>



