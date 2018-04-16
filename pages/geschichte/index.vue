<template>
  <div class="geschichte geschichte_index o-layout l-cols-default">
    <div class="o-layout__item">
      <div class="c-article">
        <header class="c-article__header">
          <h1>
            Eine bewegte Geschichte
          </h1>
        </header>
        <div class="c-article__body">
          <HistoryItem
            v-for="historyItem in historyItems"
            :key="historyItem.id"
            :title="historyItem.title"
            :subTitle="historyItem.subTitle"
            :copy="historyItem.copy"
            :imageUrl="historyItem.imageUrl"
            :imageAlt="historyItem.imageAlt"
          />
        </div>
      </div>
    </div>
    <Teasers v-if="teasers" :teasers="teasers" class="o-layout__item" />
  </div>
</template>

<script>
import _ from 'lodash';
import Teasers from '~/components/Teasers';
import HistoryItem from '~/components/HistoryItem';

export default {
  components: {
    Teasers,
    HistoryItem
  },
  computed: {
    historyItems() {
      return this.$store.getters.history;
    },
    teasers() {
      return _.get(this.$store.getters.pages, 'Geschichte.teasers');
    }
  },
  head() {
    return {
      title: 'Geschichte - MBL-Lenzburg'
    };
  }
};
</script>

