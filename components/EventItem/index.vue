<template>
  <article>
    <nuxt-link :to="event.slug" class="o-box o-box--link o-box--small link--blank">
      <ul class="o-list-delimited h3 u-mb-tiny">
        <li class="o-list-delimited__item">{{eventDate}}</li>&nbsp;
        <li class="o-list-delimited__item">{{eventTime}} Uhr</li>&nbsp;
        <li class="o-list-delimited__item">{{event.location}}</li>
      </ul>
      <h2 class="u-mb-tiny">{{event.title}}</h2>
      <p class="u-mb-0">{{event.lead}}</p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateFrom() {
      return new Date(this.event.dateFrom);
    },
    eventDate() {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return this.dateFrom.toLocaleDateString('de-DE', options);
    },
    eventTime() {
      const hours = this.dateFrom.getHours();
      const minutes = this.dateFrom.getMinutes() || '00';
      return `${hours}:${minutes}`;
    }
  }
};
</script>
