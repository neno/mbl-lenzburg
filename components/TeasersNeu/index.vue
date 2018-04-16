<template>
  <aside class="o-layout__item">
    <Teaser
      v-for="teaser in teasers"
      :key="teaser.route"
      :title="teaser.title"
      :lead="teaser.lead"
      :route="teaser.route"
    />
  </aside>
</template>

<script>
import Teaser from './teaser';

export default {
  props: {
    teasers: {
      type: Array,
      required: true
    }
  },
  components: {
    Teaser
  }
};
</script>
