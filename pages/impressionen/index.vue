<template>
  <div class="impressionen impressionen_index o-layout l-cols-default">
    <div class="o-layout__item">
      <div class="c-article">
        <header class="c-article__list-header">
          <div class="o-box o-box--small u-pt-0">
            <h1 class="u-mb-0">
              Impressionen
            </h1>
          </div>
        </header>
        <div class="c-article__list-body">
          <nuxt-link
            v-for="category in categories"
            :key="category.slug"
            :to="getGalleryLink(category.year)"
            class="o-box o-box--link o-box--small link--blank"
          >
            <article>
              <h2 class="u-mb-tiny">
                {{category.title}}
              </h2>
              <p class="u-mb-small">
                {{category.lead}}
              </p>
              <GalleryTeaser :year="category.year" />
            </article>
          </nuxt-link>
        </div>
      </div>
    </div>
    <Teasers v-if="teasers" :teasers="teasers" class="o-layout__item" />
  </div>
</template>

<script>
import _ from 'lodash';
import Teasers from '~/components/Teasers';
import EventItem from '~/components/EventItem';
import GalleryTeaser from '~/components/GalleryTeaser';

export default {
  components: {
    Teasers,
    EventItem,
    GalleryTeaser
  },
  methods: {
    getGalleryLink(year) {
      return `/impressionen/${year}`;
    },
    getImagesByCategory(year) {
      const gallery = this.galleries[year];
      return gallery.images.splice(0, 6);
    }
  },
  computed: {
    events() {
      return this.$store.getters.events;
    },
    teasers() {
      return _.get(this.$store.getters.pages, 'Impressionen.teasers');
    },
    categories() {
      const categories = _.values(this.$store.getters.categories);
      return categories.reverse();
    },
    galleries() {
      return this.$store.getters.galleries;
    }
  },
  head() {
    return {
      title: 'Impressionen - MBL-Lenzburg'
    };
  }
};
</script>

