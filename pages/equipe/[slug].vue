<script setup>
const query = gql`
  query Membre($slug: String!) {
    membre(where: { slug: $slug }) {
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

const membre = ref();

const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
membre.value = data.value.membre;

</script>

<!--Ce code controle la description quand on clique sur l'image-->

<template class="">
  <div v-if="membre" class="max-w-lg shadow shadow-2xl p-6">
    <NuxtImg :src="membre.image.url" :alt="membre.nom"/>
    <h2 class="text-2xl text-center mb-3 mt-3">{{ membre.nom }}</h2>
    <p class="description text-md">{{ membre.description }}</p>
  </div>
  <div v-else>
    <li>Loading...</li>
  </div>
</template>