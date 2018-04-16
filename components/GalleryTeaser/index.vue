<template>
  <ul class="o-list-bare o-layout l-cols-galerylist">
    <li class="o-layout__item" v-for="image in images" :key="image.imageUrl">
      <img :src="image.imageUrl" :alt="image.title" class="u-mb-0 u-mt-tiny">
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    // images: {
    //   type: Array,
    //   required: true
    // }
    year: {
      type: String,
      required: true
    }
  },
  computed: {
    images() {
      const gallery = this.$store.getters.galleries[this.year];
      if (gallery) {
        return gallery.images.slice(0, 6);
      }
    }
  }
};
</script>

