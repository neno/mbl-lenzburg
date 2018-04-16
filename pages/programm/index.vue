<template>
  <div class="programm programm_index o-layout l-cols-default">
    <div class="o-layout__item">
      <div class="c-article">
        <header class="c-article__list-header">
          <div class="o-box o-box--small u-pt-0">
            <h1 class="color-theme-2 u-mb-0">
              {{activeCategory.title}}
            </h1>
          </div>
        </header>
        <nuxt-link :to="galleryLink" class="o-box o-box--link o-box--small link--blank">
          <p class="h3 u-mb-0">
            Zur Bildgalerie
          </p>
          <GalleryTeaser :year="activeCategory.year" />
        </nuxt-link>
        <div class="c-article__list-body">
          <ul class="o-list-bare color-teaser-h2">
            <li v-for="event in events" :key="event.id">
              <EventItem :event="event" />
            </li>
          </ul>
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
  computed: {
    events() {
      return this.$store.getters.events;
    },
    teasers() {
      return _.get(this.$store.getters.pages, 'Programm.teasers');
    },
    activeCategory() {
      return this.$store.getters.activeCategory || {};
    },
    galleryLink() {
      return `/impressionen/${this.activeCategory.year}`;
    }
  },
  head() {
    return {
      title:
        'Programm - Musikalische Begegnungen Lenzburg – Klassik Festival in Lenzburg Aargau'
    };
  }
};
</script>

