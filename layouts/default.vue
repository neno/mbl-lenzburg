<template>
  <div class="o-wrapper u-lh-stripes">
    <header class="site-header">
      <Banner />
      <div class="o-wrapper--huge">
        <Navigation />
      </div>
    </header>
    <main>
      <nuxt/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Banner from '~/components/Banner';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';
import 'sanitize.css/sanitize.css';
export default {
  components: {
    Banner,
    Navigation,
    Footer
  },
  head() {
    return {
      meta: [
        {
          name: 'description',
          content:
            'Die MBL bieten jedes Jahr ein einmaliges Klassikprogramm. Wo Menschen sich begegnen, entsteht Neues, Spannendes und Überraschendes.'
        },
        {
          name: 'author',
          content:
            'Reaktor AG, Kommunikationsagentur ASW, Laurenzenvorstadt 25, CH-5000 Aarau, 062 823 50 05, kontakt@reaktor.ch, www.reaktor.ch'
        },
        {
          name: 'web_author',
          content:
            'Reaktor AG, Kommunikationsagentur ASW, Laurenzenvorstadt 25, CH-5000 Aarau, 062 823 50 05, kontakt@reaktor.ch, www.reaktor.ch'
        },
        {
          name: 'google-site-verification',
          content: 'F6hAdjooGVjY9dzwS8qNOhbYVDw9j1wOsE20yUeeQd8'
        }
      ]
    };
  }
};
</script>


<style lang="scss">
@import '~assets/stylesheets/main.scss';

@mixin clearfix {
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
}

.c-article,
.c-banner,
.c-banner__visual,
.c-banner__logo,
.i-document,
.o-box,
.o-layout,
.o-list-documents__item,
.o-media,
.o-wrapper {
  @include clearfix;
}

.o-layout {
  display: block;
}

.o-layout__item {
  width: 100%;
  margin-right: 0;
}

.o-layout.l-cols-default {
  @media (--for-tablet-landscape-up) {
    display: flex;

    & > .o-layout__item:first-child {
      flex-basis: 66.666%;
      margin-right: var(--spacing-unit-large);
    }
    & > .o-layout__item:last-child {
      flex-basis: 33.333%;
    }
  }

  @media (--for-desktop-up) {
    & > .o-layout__item:first-child {
      flex-basis: 60%;
      margin-right: var(--spacing-unit-huge);
    }
    & > .o-layout__item:last-child {
      flex-basis: 40%;
    }
  }
}

.o-layout.l-cols-footer {
  @media (--for-tablet-landscape-up) {
    display: flex;
    & > .o-layout__item {
      flex-basis: 25%;
      margin-right: var(--spacing-unit-small);
    }
  }
}

.o-layout.l-cols-galery {
  @media (--for-tablet-portrait-up) {
    display: flex;
    flex-wrap: wrap;

    & > .o-layout__item {
      flex-basis: 49%;
      margin-right: var(--spacing-unit-tiny);
    }
  }
}

.o-layout.l-cols-galerylist {
  display: flex;

  & > .o-layout__item {
    flex-basis: 25%;
    padding-right: var(--spacing-unit-tiny);
  }

  @media (--for-tablet-portrait-up) {
    & > .o-layout__item {
      flex-basis: 16.667%;
    }
  }

  @media (--for-tablet-landscape-up) {
    & > .o-layout__item {
      flex-basis: 12.5%;
    }
  }
}
</style>
