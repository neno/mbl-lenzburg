<template>
  <div class="presse presse_index o-layout l-cols-default">
    <div class="o-layout__item">
      <div class="c-article">
        <PressItem
          v-for="pressItem in pressItems"
          :key="pressItem.id"
          :title="pressItem.title"
          :lead="pressItem.lead"
          :documents="pressItem.documents"
        />
      </div>
    </div>
    <Teasers v-if="teasers" :teasers="teasers" class="o-layout__item" />
  </div>
</template>

<script>
import _ from 'lodash';
import Teasers from '~/components/Teasers';
import PressItem from '~/components/PressItem';

export default {
  components: {
    Teasers,
    PressItem
  },
  computed: {
    pressItems() {
      return this.$store.getters.documents;
    },
    teasers() {
      return _.get(this.$store.getters.pages, 'Presse.teasers');
    }
  },
  head() {
    return {
      title: 'Presse - MBL-Lenzburg'
    };
  }
};
</script>

