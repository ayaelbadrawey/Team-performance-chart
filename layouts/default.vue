<template>
  <div><Nuxt /></div>
</template>

<script>
export default {
  name: "DefaultLayout",
  created() {
    import("@/styles/components-dashboard.scss");
    import("@/styles/components-users-list.scss");
    import("@/styles/main.scss");
    import("@/styles/reset.scss");
  },
};
</script>

