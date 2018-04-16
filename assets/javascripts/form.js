import Vue from 'vue';
import de from 'vee-validate/dist/locale/de';
import VeeValidate, { Validator } from 'vee-validate';

// Validator.addLocale(de);

// const config = {
//   locale: 'de',
// };

Vue.use(VeeValidate);
Validator.localize('de', de);
new Vue({ // eslint-disable-line no-new
  el: '#form',
  data() {
    return {
      anrede: '',
      vorname: '',
      name: '',
      strasse: '',
      zip: '',
      ortschaft: '',
      telefon: '',
      email: '',
      mitglied: '',
      patron_amount: '',
      sponsor_amount: '',
      formSubmitted: false,
    };
  },

  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            // all good
            this.submitForm();
          } else {
            // validation failed.
          }
        })
        .catch((err) => {
        // eslint-disable-next-line
        alert('Correct them errors!' + err);
        });
    },
    submitForm() {
      // this.formSubmitted = true
      this.$el.submit();
    },
  },
});
