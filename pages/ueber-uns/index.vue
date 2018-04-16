<template>
  <div class="geschichte geschichte_index o-layout l-cols-default">
    <div class="o-layout__item">
      <div class="c-article">
        <header class="c-article__header">
          <h1>
            Über uns
          </h1>
        </header>
        <div class="c-article__body">
          <h2>{{team.title}}</h2>
          <p v-if="team.lead">{{team.lead}}</p>
          <div v-if="team.copy" class="u-mb-normal">{{team.copy}}</div>
          <figure v-if="team.imageUrl" class="c-article__img">
            <img :src="team.imageUrl" :alt="team.imageAlt" class="u-mb-tiny">
            <figcaption></figcaption>
          </figure>
        </div>
      </div>
    </div>
    <Teasers v-if="teasers" :teasers="teasers" class="o-layout__item" />
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
    team() {
      return this.$store.getters.team;
    },
    teasers() {
      return _.get(this.$store.getters.pages, 'Über uns.teasers');
    }
  },
  head() {
    return {
      title:
        'Über uns - Musikalische Begegnungen Lenzburg – Klassik Festival in Lenzburg Aargau'
    };
  }
};
</script>
