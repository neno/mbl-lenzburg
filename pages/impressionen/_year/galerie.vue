<template>
  <div class="impressionen" :class="galleryClasses">
    <div class="o-layout">
      <div class="o-layout__item">
        <div class="c-article">
          <header class="c-article__header">
            <h1 class="u-mb-0">
              Bildergalerie
            </h1>
          </header>
          <div class="c-article__body">
            <ul class="o-list-bare o-layout l-cols-galery">
              <li class="o-layout__item" v-for="image in images" :key="image.imageUrl">
                <img :src="image.imageUrl" :alt="image.title" class="u-mt-normal u-mb-tiny">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Teasers v-if="teasers" :teasers="teasers" class="o-layout__item" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Teasers from '~/components/Teasers';

export default {
  components: {
    Teasers
  },
  computed: {
    year() {
      return this.$route.params.year;
    },
    images() {
      const gallery = this.$store.getters.galleries[this.year];
      return _.get(gallery, 'images');
    },
    teasers() {
      return _.get(this.$store.getters.pages, 'Impressionen.teasers');
    },
    galleryClasses() {
      return `impressionen_${this.year} impressionen_${
        this.year
      }_galerie impressionen_${this.year}_galerie_index`;
    }
  }
};
</script>
