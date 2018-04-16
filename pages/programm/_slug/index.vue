<template>
  <div class="programm programm_index o-layout l-cols-default">
    <div class="o-layout__item">
      <div class="c-article">
        <header class="c-article__header">
          <ul class="o-list-delimited h3">
            <li class="o-list-delimited__item">
              <time :datetime="this.event.dateFrom">{{eventDate}}</time>
            </li>&nbsp;
            <li class="o-list-delimited__item">{{eventTime}} Uhr</li>&nbsp;
            <li class="o-list-delimited__item">{{event.location}}</li>
          </ul>
          <h1 class="color-theme-1">{{event.title}}</h1>
          <p v-if="event.lead" class="u-mb-small">
            {{event.lead}}
          </p>
        </header>
        <figure v-if="event.imageUrl" class="c-article__img">
          <img :src="event.imageUrl">
        </figure>
        <div class="c-article__body wysiwyg" v-html="text"></div>
        <footer class="c-article__footer">
          <ul class="o-list-bare">
            <li class="h3">
              <nuxt-link to="/veranstaltungsorte" class="link " target="_self">Veranstaltungsorte</nuxt-link>
            </li>
            <li class="h3 u-mt-tiny is-hidden-mobile-only">
              <nuxt-link to="/programm" class="link">zur Übersicht</nuxt-link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
    <Teasers v-if="teasers" :teasers="teasers" class="o-layout__item" />
  </div>
</template>

<script>
import _ from 'lodash';
import marked from 'marked';
import { formattedDate, formattedTime } from '~/lib/dateTime.js';
import Teasers from '~/components/Teasers';

export default {
  components: {
    Teasers
  },
  computed: {
    event() {
      const slug = this.$route.params.slug;
      return this.$store.getters.events[slug];
    },
    teasers() {
      return _.get(this.$store.getters.pages, 'Programm.teasers');
    },
    eventDate() {
      return formattedDate(this.event.dateFrom);
    },
    eventTime() {
      return formattedTime(this.event.dateFrom);
    },
    text() {
      if (this.event.copy) {
        return marked(this.event.copy);
      }
    }
  },
  head() {
    return {
      title: `${
        this.event.title
      } - Musikalische Begegnungen Lenzburg – Klassik Festival in Lenzburg Aargau`
    };
  }
};
</script>

