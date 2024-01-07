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
    <h1 class="text-4xl font-bold mb-8 mt-9 text-center">Liste des Membres</h1>
    <ul v-if="membres" class="flex flex-wrap justify-center">
      <li v-for="membre in membres" :key="membre.id" class="mx-4 my-8 max-w-sm shadow-xl">
        <div class="text-center bg-white p-6 rounded-md">
          <NuxtImg :src="membre.image.url" :alt="membre.nom" class="mx-auto mb-4 w-32 h-32 rounded-full" />
          <h2 class="text-lg font-semibold mb-2">{{ membre.nom }}</h2>
          <p class="text-gray-700">{{ membre.description }}</p>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li>Loading...</li>
    </ul>
  </div>
</template>
