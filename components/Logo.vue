<template>
  <svg class="Logo" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    viewBox: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.Logo {
  animation: 1s appear;
  width: 55%;
  margin: auto;
}
.Logo:not(:first-child) {
  margin-top: 30px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
