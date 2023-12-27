<script setup>
const query = gql`
  query Membres {
    membres(orderBy: id_ASC) {
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
const membres = ref();

onMounted(async () => {
  const { data } = await useAsyncQuery(query);
  membres.value = data.value.membres;
});
</script>
<!--Ce code controle la description d'aperçu de l'image-->
<template>
  <div>
    <h1 class="text-4xl font-bold mb-8 text-center">Liste des Membres</h1>
    <ul v-if="membres" class="flex flex-wrap justify-start">
      <li v-for="membre in membres" :key="membre.id" class="mx-7 my-4 shadow-xl">
        <div class="text-center block p-6">
          <NuxtImg :src="membre.image.url" :alt="membre.nom" class="mx-auto mb-2 bg-purple-400" />
          <h2 class="text-center text-lg">{{ membre.nom }}</h2>
          <p class="description text-md">{{ membre.description }}</p>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li>Loading...</li>
    </ul>
  </div>
</template>