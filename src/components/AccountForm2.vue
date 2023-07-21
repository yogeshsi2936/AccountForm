<template>
  <form @submit.prevent="validateBeforeSubmit">

    <!-- First Name -->
    <div class="">
      <label>First Name</label>
      <p>
        <input name="firstNameValidator" v-model="firstname" v-validate="'required|firstNameValidator'" type="text" placeholder="First Name">
        <span class="errorMsg" v-show="errors.has('firstNameValidator')">{{ errors.first('firstNameValidator') }}</span>
      </p>
    </div>

    <!-- Last Name -->
    <div class="">
      <label>Last Name</label>
      <p>
        <input name="lastNameValidator" v-model="lastname" v-validate="'required|firstNameValidator'" type="text" placeholder="Last Name">
        <span class="errorMsg" v-show="errors.has('lastNameValidator')">{{ errors.first('lastNameValidator') }}</span>
      </p>
    </div>

    <!-- EmailAddress -->
    <div class="">
      <label>Email</label>
      <p>
        <input name="email" v-model="email" v-validate="'required|email'" type="text" placeholder="Email">
        <span class="errorMsg" v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </p>
    </div>

    <!-- Phone number -->
    <div class="">
      <label>Phone Number</label>
      <p>
        <input name="phoneValidator"  v-model="phone" v-validate="{required:true ,numeric:true,phoneValidator:country }" type="number" placeholder="Phone">
        <span class="errorMsg" v-show="errors.has('phoneValidator')">{{ errors.first('phoneValidator') }}</span>
      </p>
    </div>
    <!-- Gender -->
    <div>
      <p><label> Gender </label></p>
      <label class="radio is-inline" v-for="gendr in genderList" :key="gendr">
        <input type="radio" v-model="gender" :value="gendr" class="radioBtn" v-validate="'required|genderValidator'" name="genderValidator">
        <span class="radioBtn">{{ gendr }}</span>
      </label>
      <span class="errorMsg" v-show="errors.has('genderValidator')">{{ errors.first('genderValidator') }}</span>

    </div>

    <!-- Country -->
    <div>
      <p><label for="selectedOption">Select Country</label></p>
      <select id="selectedOption" v-model="country" v-validate="'required|countrySelectValidator'" name="countrySelectValidator">
        <option value="" disabled>Please select country</option>
        <option v-for="option in countryList" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
      <span class="errorMsg" v-show="errors.has('countrySelectValidator')">{{ errors.first('countrySelectValidator') }}</span>
    </div>

    <!-- state -->
    <div>
      <div v-if="country === 'india'">
        <p><label for="selectedOption">Select state </label></p>
        <select id="selectedOption" v-model="state" v-validate="{required:true , stateValidator:country }" name="stateValidator" >
          <option value="" disabled>Please select state</option>
          <option v-for="state in stateList" :key="state" :value="state">{{ state }}</option>
        </select>
        <span class="errorMsg" v-show="errors.has('stateValidator')">{{ errors.first('stateValidator') }}</span>
      </div>

      <div v-else>
        <label>State</label>
        <div>
          <input v-validate="'required|stateValidator'" type="text" name="stateValidator" placeholder="state name">
          <span class="errorMsg" v-show="errors.has('stateValidator')">{{ errors.first('stateValidator') }}</span>
        </div>
      </div>

    <!-- Birthdate -->
      <div>
        <p> <label for="dateInput">Birthdate</label></p>
        <input v-validate="{required:true , birthDate:[ageLimit,selectedDate], }" type="date" id="dateInput" v-model="selectedDate" name="birthDate">
        <span class="errorMsg" v-show="errors.has('birthDate')">{{ errors.first('birthDate') }}</span>
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
    firstname: '',
    lastname: '',
    phone: '',
    url: '',
    gender: '',
    country: '',
    state: '',
    birthdate: '',
    selectedDate: '',
    ageLimit :18,
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

<style scoped>

.errorMsg {
  margin-left: 1rem;
  color: red;
}
.radioBtn {
  margin-left: 0.5rem;
}
</style>