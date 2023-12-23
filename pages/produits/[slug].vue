<script setup>
const query = gql`
  query Produit($slug: String!) {
    produit(where: { slug: $slug }) {
      id
      nom
      slug
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

<template class="">
  <div v-if="produit" class="max-w-lg">
    <NuxtImg :src="produit.image.url" :alt="produit.nom"/>
    <h2 class="text-2xl text-center mb-3 mt-3">{{ produit.nom }}</h2>
    <p class="description">{{ produit.description }}</p>
  </div>
  <div v-else>
    <li>Loading...</li>
  </div>
</template>
