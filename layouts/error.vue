<template>
  <div class="row">
    <div class="col-12 background">
      <div class="d-flex align-items-center justify-content-center h-100">
        <div class="d-flex flex-column">
          <img src="404-error.png" />
          <h1 class="text-info text-center">PAGE NOT FOUND</h1>
          <h6 class="fw-light text-muted text-center">
            We looked everywhere for this page.
          </h6>
          <h6 class="fw-light text-muted text-center">
            Are you surethe URL is correct?
          </h6>
          <div class="d-flex justify-content-center my-3">
            <nuxt-link
              to="/"
              class="btn btn-light w-25 rounded-pill text-white"
              style="background-color: rgb(13 202 240)"
            >
              Go Back Home
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  layout: "empty",
};
</script>

<style>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>