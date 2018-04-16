<template>
  <article class="c-documents">
    <header class="c-article__list-header">
      <div class="o-box o-box--small u-pt-0">
        <h1 class="u-mb-0">{{title}}</h1>
        <p class="u-mt-tiny">{{lead}}</p>
      </div>
    </header>
    <div class="c-article__list-body">
      <ul class="o-list-documents u-mb-0">
        <li v-for="document in documents" :key="document.fileUrl">
          <a
            :href="document.fileUrl"
            target="_blank"
            rel="noopener"
            class="o-list-documents__item link--blank"
          >
            <i class="i-document"></i>
            <span class="i-document__link">{{document.title}}</span>
          </a>
        </li>
      </ul>
    </div>
    <footer class="c-article__list-footer"></footer>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    lead: {
      type: String,
      required: false
    },
    documents: {
      type: Array,
      required: true
    }
  }
};
</script>
