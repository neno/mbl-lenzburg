<template>
  <form action="https://formspree.io/mykyleem" method="POST" id="form" @submit.prevent="onSubmit">
    <input type="hidden" name="_next" value="//www.mbl-lenzburg.ch/danke">
    <input type="text" name="_gotcha" style="display: none;">
    <fieldset class="fieldset">
      <h3 class="u-mb-small">Botschafter</h3>
      <p>
        <input name="mitglied" value="Botschafter" type="radio" id="ambassador">
        <label for="ambassador">
          Botschafterin/Botschafter MBL, ich verteile 12 Flyer an Bekannte
        </label>
      </p>
    </fieldset>
    <fieldset class="fieldset">
      <h3 class="u-mb-small">Freundschaft</h3>
      <p>
        <input name="mitglied" value="Freundschaft:50" type="radio" id="friend">
        <label for="friend">
          Freundin/Freund MBL ab Fr. 50.–, ich erhalte 1 Gratisticket
        </label>
      </p>
      <p>
        <input name="mitglied" value="Freundschaft:80" type="radio" id="friendship">
        <label for="friendship">
          Paarfreundschaft MBL ab Fr. 80.–, wir erhalten 2 Gratistickets
        </label>
      </p>
    </fieldset>
    <fieldset class="fieldset">
      <h3 class="u-mb-small">Gönnerschaft</h3>
      <p>
        <input name="mitglied" value="Goenner" type="radio" id="patron">
        <label for="patron">
          Gönnerin/Gönner MBL ab Fr. 150.–, ich erhalte 1 Festivalpass
          <br>
          <span class="small">
            Auf Wunsch werde ich namentlich im Programmheft erwähnt.
          </span>
        </label>
      </p>
    </fieldset>
    <fieldset class="fieldset">
      <h3 class="u-mb-small">Sponsor</h3>
      <p>
        <input name="mitglied" value="Sponsor" type="radio" id="sponsor">
        <label for="sponsor">
          Sponsoren-Partner MBL ab Fr. 1'000.–
          <br>
          <span class="small">
            Auf Wunsch werden wir namentlich im Programmheft erwähnt.
          </span>
        </label>
      </p>
    </fieldset>
    <fieldset class="fieldset">
      <h3 class="u-mb-small">Personalien</h3>
      <div class="select-field">
        <select>
          <option disabled="disabled" value="">Bitte wählen</option>
          <option>Frau und Herr</option>
          <option>Frau</option>
          <option>Herr</option>
        </select>
        <label for="name" class="active">Anrede</label>
      </div>
      <div class="input-field">
        <input
          type="text"
          name="name"
          class="validate"
          data-vv-as="Name"
          v-validate="'required'"
          :class="{'is-successs': true, 'is-danger': errors.has('name') }"
          :data-error="errors.first('name')"
        >
        <label for="name" class="active" :data-error="errors.first('name')">
          Name
        </label>
      </div>
      <div class="input-field">
        <input
          type="text"
          name="vorname"
          class="validate"
          data-vv-as="Vorname"
          v-validate="'required'"
          :class="{'is-successs': true, 'is-danger': errors.has('vorname') }"
          :data-error="errors.first('vorname')"
        >
        <label for="vorname" class="active" :data-error="errors.first('vorname')">
          Vorname
        </label>
      </div>
      <div class="input-field">
        <input type="text" name="firma">
        <label for="firma" class="active">Firma</label>
      </div>
      <div class="input-field">
        <input
          type="text"
          name="strasse"
          class="validate"
          data-vv-as="Strasse"
          v-validate="'required'"
          :class="{'is-successs': true, 'is-danger': errors.has('strasse') }"
          :data-error="errors.first('strasse')"
        >
        <label for="strasse" class="active" :data-error="errors.first('strasse')">
          Strasse
        </label>
      </div>
      <div class="f-row">
        <div class="input-field f-row__col w-40">
          <input
            type="text"
            name="zip"
            maxlength="4"
            class="validate"
            data-vv-as="Postleitzahl"
            v-validate="'required|numeric'"
            :class="{'is-successs': true, 'is-danger': errors.has('zip') }"
            :data-error="errors.first('zip')"
          >
          <label for="zip" class="active" :data-error="errors.first('zip')">
            Plz
          </label>
        </div>
        <div class="input-field f-row__col w-60">
          <input
            type="text"
            name="ortschaft"
            class="validate"
            data-vv-as="Ortschaft"
            v-validate="'required'"
            :class="{'is-successs': true, 'is-danger': errors.has('ortschaft') }"
            :data-error="errors.first('ortschaft')"
          >
          <label for="ortschaft" class="active" :data-error="errors.first('ortschaft')">
            Ortschaft
          </label>
        </div>
      </div>
      <div class="input-field">
        <input
          type="text"
          name="telefon"
          class="validate"
          data-vv-as="Telefon"
          v-validate="'required'"
          :class="{'is-successs': true, 'is-danger': errors.has('telefon') }"
          :data-error="errors.first('telefon')"
        >
        <label for="telefon" class="active" :data-error="errors.first('telefon')">
          Telefon
        </label>
      </div>
      <div class="input-field">
        <input
          type="text"
          name="email"
          class="validate"
          data-vv-as="Email"
          v-validate="'required|email'"
          :class="{'is-successs': true, 'is-danger': errors.has('email') }"
          :data-error="errors.first('email')"
        >
        <label for="email" class="active" :data-error="errors.first('email')">
          Email
        </label>
      </div>
    </fieldset>
    <fieldset>
      <button type="submit" class="c-btn c-btn--primary">
        Senden
      </button>
    </fieldset>
  </form>
</template>

<script>
export default {
  inject: ['$validator'],
  methods: {
    onSubmit() {
      this.$validator
        .validateAll()
        .then(isValid => {
          if (isValid) {
            // all good
            // this.submitForm();
            // console.log(isValid);
            return isValid;
          } else {
            // validation failed.
          }
        })
        .catch(err => {
          // eslint-disable-next-line
          alert('Correct them errors!' + err);
        });
    }
    // submitForm() {
    //   // this.formSubmitted = true
    //   this.$el.submit();
    // }
  }
};
</script>
