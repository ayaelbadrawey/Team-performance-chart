<template>
  <div>
    <div class="d-flex justify-content-center py-3">
      <nuxt-link class="mx-3" to="/">Home</nuxt-link>
      <nuxt-link to="/performance-page">Team performance chart page</nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

