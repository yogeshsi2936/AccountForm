<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="">
      <label>Email</label>
      <p>
        <input name="email" v-model="email" v-validate="'required|email'" type="text" placeholder="Email">
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </p>
    </div>
    <div class="">
      <label>Name</label>
      <p>
        <input name="name" v-model="name" v-validate="'required|alpha'" type="text" placeholder="Name">
        <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
      </p>
    </div>
    <div class="">
      <label>Phone</label>
      <p>
        <input name="phone" v-model="phone" v-validate="'required|numeric'" type="text" placeholder="Phone">
        <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
      </p>
    </div>
    <div>
      <p><label> Gender </label></p>
      <label class="radio is-inline" v-for="gendr in genderList" :key="gendr">
        <input type="radio" v-model="gender" :value="gendr" class="radio-input" v-validate="'required|alpha'" name="">
        <span class="radio-label">{{ gendr }}</span>
      </label>
    </div>
    <div>
      <p><label for="selectedOption">Select Country</label></p>
      <select id="selectedOption" v-model="country" v-validate="'required|alpha'">
        <option value="" disabled>Please select country</option>
        <option v-for="option in countryList" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
    <div>
      <div v-if="country === 'india'">
        <p><label for="selectedOption">Select state </label></p>
        <select id="selectedOption" v-model="state" v-validate="'required'">
          <option value="" disabled>Please select state</option>
          <option v-for="state in stateList" :key="state" :value="state">{{ state }}</option>
        </select>
      </div>
      <div v-else>
        <label>State</label>
        <p>
          <input name="name" v-model="state" v-validate="'required|alpha'" type="text" placeholder="state name">
          <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </p>
      </div>

      <div>
        <p>Birthdate</p>
        <input v-validate="'date_format:dd/MM/yyyy|date_between:10/09/2016,20/09/2016'" name="date_between_field" type="text"/>
        <span class="error">{{ errors.first('birthdate') }}</span>
      </div>
    </div>

    <div class="">
      <p>
        <button class="button is-primary" type="submit">Submit</button>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AccountForm2',
  data: () => ({
    email: '',
    name: '',
    phone: '',
    url: '',
    gender: '',
    country: '',
    state: '',
    birthdate: '',
    genderList: ['male', 'female'],
    countryList: [
      { value: 'india', label: 'India' },
      { value: 'usa', label: 'United States' },
      { value: 'qatar', label: 'Qatar' },
      { value: 'australia', label: 'Australia' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'russia', label: 'Russia' },
      { value: 'sing', label: 'Singapore' },
    ],
    stateList: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Karnataka'
      , 'Kerala', 'Maharashtra', 'Meghalaya', 'Rajasthan', 'West Bengal'],

  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }

        alert('Correct them errors!');
      });
    }
  }
};
</script>
