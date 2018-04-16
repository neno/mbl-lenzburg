<template>
  <nav class="is-hidden-mobile-only">
    <ul class="o-list-bare c-nav-list u-mb-0">
      <li
        class="c-nav-list__item"
        v-for="item in navItems"
        :key="item.route"
      >
        <nuxt-link class="c-nav-link" activeClass="is-active" :to="item.route" exact>{{item.title}}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { title: 'Home', route: '/' },
        { title: 'Programm', route: '/programm' },
        { title: 'Presse', route: '/presse' },
        { title: 'Geschichte', route: '/geschichte' },
        { title: 'Unterstützen', route: '/unterstuetzen' },
        { title: 'Über uns', route: '/ueber-uns' }
      ]
    };
  }
};
</script>
