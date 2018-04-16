<template>
  <article>
    <nuxt-link :to="event.slug" append class="o-box o-box--link o-box--small link--blank">
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
import { formattedDate, formattedTime } from '~/lib/dateTime.js';
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    eventDate() {
      return formattedDate(this.event.dateFrom);
    },
    eventTime() {
      return formattedTime(this.event.dateFrom);
    }
  }
};
</script>
