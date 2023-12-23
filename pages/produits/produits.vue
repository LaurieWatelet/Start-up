<script setup>
const query = gql`
  query Produits {
    produits(orderBy: id_ASC) {
      createdAt
      description
      id
      nom
      publishedAt
      slug
      updatedAt
      image {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 256, width: 256 } }
          }
        )
      }
    }
  }
`;

const produits = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
produits.value = data.value.produits;
</script>
<!--Ce code controle la description d'aperçu de l'image-->
<template>
  <ul v-if="produits" class="flex flex-wrap justify-start">
    <li v-for="produit in produits" :key="produit.id" class="mx-7 my-4 shadow-xl">
      <NuxtLink :to="`/produit/${produit.slug}`" class="text-center block">
        <NuxtImg :src="produit.image.url" :alt="produit.nom" class="mx-auto mb-2" />
        <h2 class="text-center text-lg mb-2">{{ produit.nom }}</h2>
      </NuxtLink>
    </li>
  </ul>
  <ul v-else>
    <li>Loading...</li>
  </ul>
</template>