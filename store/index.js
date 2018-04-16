import Vuex from 'vuex';
import _ from 'lodash';
import { createClient } from '~/plugins/contentful';

import buildPages from '~/lib/buildPages';
import buildEvents from '~/lib/buildEvents';
import buildCategories from '~/lib/buildCategories';
import buildActiveCategory from '~/lib/buildActiveCategory';
import buildGalleries from '~/lib/buildGalleries';
import buildDocuments from '~/lib/buildDocuments';
import buildHistory from '~/lib/buildHistory';
import buildTeam from '~/lib/buildTeam';

const client = createClient();

const createStore = () => {
  return new Vuex.Store({
    state: {
      pages: {},
      events: {},
      categories: {},
      activeCategory: {},
      galleries: {},
      documents: [],
      history: [],
      team: {}
    },
    mutations: {
      setPages(state, pages) {
        state.pages = pages;
      },
      setEvents(state, events) {
        state.events = events;
      },
      setCategories(state, categories) {
        state.categories = categories;
      },
      setActiveCategory(state, activeCategory) {
        state.activeCategory = activeCategory;
      },
      setGalleries(state, galleries) {
        state.galleries = galleries;
      },
      setDocuments(state, documents) {
        state.documents = documents;
      },
      setHistory(state, historItems) {
        state.history = historItems;
      },
      setTeam(state, team) {
        state.team = team;
      }
    },
    actions: {
      getGalleryByYear(vuexContext, context) {
        console.log('vuexContext', vuexContext);
        console.log('context', context);
        return [];
      },
      nuxtServerInit(vuexContext, context) {
        return Promise.all([
          client.getEntries({
            ['content_type']: 'pages'
          }),
          client.getEntries({
            ['content_type']: 'events'
          }),
          client.getEntries({
            ['content_type']: 'eventcategory'
          }),
          client.getEntries({
            ['content_type']: 'eventsGalery'
          }),
          client.getEntries({
            ['content_type']: 'dokumente'
          }),
          client.getEntries({
            ['content_type']: 'history'
          }),
          client.getEntries({
            ['content_type']: 'team'
          })
        ])
          .then(
            ([
              resPages,
              resEvents,
              resCategories,
              resGalleries,
              resDocuments,
              resHistory,
              resTeam
            ]) => {
              const pages = buildPages(resPages.items);
              vuexContext.commit('setPages', pages);

              const events = buildEvents(resEvents.items);
              vuexContext.commit('setEvents', events);

              const categories = buildCategories(resCategories.items);
              vuexContext.commit('setCategories', categories);

              const activeCategory = buildActiveCategory(resCategories.items);
              vuexContext.commit('setActiveCategory', activeCategory);

              const galleries = buildGalleries(resGalleries.items);
              vuexContext.commit('setGalleries', galleries);

              const documents = buildDocuments(resDocuments.items);
              vuexContext.commit('setDocuments', documents);

              const historItems = buildHistory(resHistory.items);
              vuexContext.commit('setHistory', historItems);

              const team = buildTeam(resTeam.items);
              vuexContext.commit('setTeam', team);

              // console.log(resTeam.items[0].fields);
            }
          )
          .catch(console.error);
      }
    },
    getters: {
      pages(state) {
        return state.pages;
      },
      events(state) {
        return state.events;
      },
      categories(state) {
        return state.categories;
      },
      activeCategory(state) {
        return state.activeCategory;
      },
      galleries(state) {
        return state.galleries;
      },
      documents(state) {
        return state.documents;
      },
      history(state) {
        return state.history;
      },
      team(state) {
        return state.team;
      }
    }
  });
};

export default createStore;
