<template>
  <div class="geschichte geschichte_index o-layout l-cols-default">
    <div class="o-layout__item">
      <div class="c-article">
        <header class="c-article__header">
          <h1>
            Veranstaltungsorte
          </h1>
        </header>
        <img src="~assets/images/theme/theme_map.gif">
        <div class="c-article__body">
          <ul class="o-list-bare">
            <li>1 Schloss Lenzburg</li>
            <li>2 Altstadt</li>
            <li>3 Reformierte Stadtkirche </li>
            <li>4 Burghaldenhaus, Schlossgasse 19</li>
            <li>5 Barracuda, im Lenz, Ateliergasse 3</li>
            <li>6 HERO, Karl Roth-Strasse 8</li>
          </ul>
          <h3>Hinweis zu den Konzerten auf dem Schloss Lenzburg</h3>
          <ul>
            <li>
              Für Gehbehinderte von Lenzburg oder bei Anreise mit dem Zug können Sie den Transport-Shuttle der MBL benutzen: Reservierungen bis zum Vortag des Konzertes unter Telefon <a class="link" href="tel:+4179653517">079&nbsp;653&nbsp;25&nbsp;17</a>.
            </li>
            <li>
              Der Transport ist im Konzertbillett inbegriffen, muss aber vorreserviert werden. Für die Hinreise kann auch der öffentliche Ortsbus benützt werden.
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
        'Veranstaltungsorte - Musikalische Begegnungen Lenzburg – Klassik Festival in Lenzburg Aargau'
    };
  }
};
</script>
