<template>
  <section>
    <h2>{{title}}</h2>
    <h3 v-if="subTitle">{{subTitle}}</h3>
    <figure v-if="imageUrl" class="o-media o-media__img--left">
      <img :src="imageUrl" :alt="imageAlt">
    </figure>
    <p>{{copy}}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false
    },
    copy: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: false
    },
    imageAlt: {
      type: String,
      required: false
    }
  }
};
</script>
