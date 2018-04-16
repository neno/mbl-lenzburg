<template>
  <div class="geschichte geschichte_index o-layout l-cols-default">
    <div class="o-layout__item">
      <div class="c-article">
        <header class="c-article__header">
          <h1>
            Unterstützen Sie uns
          </h1>
          <p>
            Füllen Sie bitte das folgende Formular aus und Sie erhalten aktuelle Informationen über unser Programm.
          </p>
        </header>
        <div class="c-article__body">
          <Form />
          <h3 class="small u-mt-normal">
            Unsere Kontoverbindung
          </h3>
          <ul class="small o-list-delimited">
            <li class="o-list-delimited__item">
              Hypothekarbank Lenzburg
            </li>
            <li class="o-list-delimited__item">
              IBAN CH48 0830 7000 0256 8732 8
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
import Form from '~/components/Form';

export default {
  components: {
    Teasers,
    Form
  },
  computed: {
    team() {
      return this.$store.getters.team;
    },
    teasers() {
      return _.get(this.$store.getters.pages, 'Unterstützen.teasers');
    }
  },
  head() {
    return {
      title:
        'Unterstützen - Musikalische Begegnungen Lenzburg – Klassik Festival in Lenzburg Aargau',
      meta: [
        {
          name: 'description',
          content:
            'Die MBL bieten jedes Jahr ein einmaliges Klassikprogramm. Sorgen Sie mit Ihrer Unterstützung für musikalische Vielfalt.'
        }
      ]
    };
  }
};
</script>
