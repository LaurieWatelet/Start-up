<script setup>
const query = gql`
  query Article($slug: String!) {
    article(where: { slug: $slug }) {
      id
      nom
      slug
      date
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

const article = ref();

const route = useRoute();
const { data } = await useAsyncQuery(query, {
  slug: route.params.slug,
});

console.log(data.value);
article.value = data.value.article;

</script>

<!--Ce code controle la description quand on clique sur l'image-->

<template class="">
  <div v-if="article" class="max-w-lg">
    <NuxtImg :src="article.image.url" :alt="article.nom"/>
    <h2 class="text-2xl text-center mb-3 mt-3">{{ article.nom }}</h2>
    <p class="description">{{ article.description }}</p>
    <p class="date">{{ article.date }}</p>
  </div>
  <div v-else>
    <li>Loading...</li>
  </div>
</template>