<template>
  <div class="index o-layout">
    <div class="o-layout-item">
      <div class="c-article">
        <nuxt-link to="/programm" class="link--blank">
          <header class="c-article__header u-mb-normal">
            <h1 class="color-theme-2 u-mb-tiny">{{activeCategory.title}}</h1>
            <h2 class="color-theme-2">{{activeCategory.lead}}</h2>
          </header>
          <picture>
            <source media="(min-width: 900px)" srcset="~assets/images/theme/theme_home.jpg">
            <source media="(max-width: 899px)" srcset="~assets/images/theme/theme_home_mobile.jpg">
            <img src="~assets/images/theme/theme_home.jpg">
          </picture>
        </nuxt-link>
      </div>
    </div>
    <Teasers v-if="teasers" :teasers="teasers" />
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
    teasers() {
      return _.get(this.$store.getters.pages, 'Home.teasers');
    },
    activeCategory() {
      return this.$store.getters.activeCategory;
    }
  },
  head() {
    return {
      title:
        'Home - Musikalische Begegnungen Lenzburg – Klassik Festival in Lenzburg Aargau'
    };
  }
};
</script>
