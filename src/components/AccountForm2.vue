<template>
  <div>
  <form @submit.prevent="validateBeforeSubmit" class="formData">
    
    <!-- First Name -->
    <div class="">
      <label>First Name</label>
      <p>
        <input name="firstName" v-model="firstname"
          v-validate="{ required: true, alpha_num_space:true}" type="text"
          placeholder="First Name">
          <span class="errorMsg">{{ errors.first('firstName')}}</span>
      </p>
    </div>

    <!-- Last Name -->
    <div class="">
      <label>Last Name</label>
      <p>
        <input name="lastName" v-model="lastname"
          v-validate="{ required: true, alpha_num_space:true}" type="text"
          placeholder="Last Name">
          <span class="errorMsg">{{ errors.first('lastName')}}</span>
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
        <input name="phoneNumber" v-model="phone"
          v-validate="{ required: true, phoneNumberValidator: country }" type="text" placeholder="Phone">
        <span class="errorMsg">{{ errors.first('phoneNumber')
        }}</span>
      </p>
    </div>
    <!-- Gender -->
    <div>
      <p><label> Gender </label></p>
      <label class="radio is-inline" v-for="gendr in genderList" :key="gendr">
        <input type="radio" v-model="gender" :value="gendr" class="radioBtn" v-validate="'required'" name="required">
        <span class="radioBtn">{{ gendr }}</span>
      </label>
      <span class="errorMsg" v-show="errors.has('required')">{{ errors.first('required') }}</span>

    </div>

    <!-- Country -->
    <div>
      <p><label>Select Country</label></p>
      <select v-model="country" v-validate="'required'" name="name">
        <option value="" disabled>Please select country</option>
        <option v-for="option in countryList" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
      <span class="errorMsg" v-show="errors.has('name')">{{ errors.first('name') }}</span>
    </div>

    <!-- state -->
    <div>
      <div v-if="country === 'india'">
        <p><label>Select state </label></p>
        <select v-model="state" v-validate="{ required: true }" name="required">
          <option value="" disabled>Please select state</option>
          <option v-for="state in stateList" :key="state.value" :value="state.value">{{ state.value }}</option>
        </select>
        <span class="errorMsg" v-show="errors.has('required')">{{ errors.first('required') }}</span>
      </div>

      <div v-else>
        <label>State</label>
        <div>
          <input  v-validate="{ required: true, alpha_spaces:true}" 
            type="text" name="state" placeholder="state name">
          <span class="errorMsg">{{ errors.first('state') }}</span>
        </div>
      </div>

      <!-- Birthdate -->
      <div>
        <p> <label for="dateInput">Date of Birth</label></p>
        <input v-validate="{ required: true, DateValidator: [ageLimit, birthDate],}" type="date" id="dateInput"
          v-model="birthDate" name="Date Validator" formate >
        <span class="errorMsg">{{ errors.first('Date Validator') }}</span>
      </div>
    </div>
    <div class="">
      <p>
        <button class="button is-primary" type="submit">Submit</button>
      </p>
    </div>
  </form>
  <Swiper/>
</div>

</template>

<script>
import Swiper from './Swiper.vue';
export default {
  name: 'AccountForm2',
  components : {
    Swiper
  },
  data: () => ({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    gender: '',
    country: '',
    state: '',
    birthDate: '',
    ageLimit: 18,
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
    stateList: [
      { value: 'andhrapradhesh', label: 'Andhra Pradesh' },
      { value: 'arunachalpradhesh', label: 'Arunachal Pradesh' },
      { value: 'assam', label: 'Assam' },
      { value: 'chhattisgarh', label: 'Chhattisgarh' },
      { value: 'meghalaya', label: 'Meghalaya' },
      { value: 'maharashtra', label: 'Maharashtra' },
      { value: 'kerala', label: 'Kerala' },
      { value: 'rajsthan', label: 'Rajasthan' },
      { value: 'bihar', label: 'Bihar' },
      { value: 'westbengal', label: 'West Bengal' },
    ],
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }
        alert('Please fill all required fields properly.');
      });
    }
  },
};
</script>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 202px;
}
.swiper-container {
  height: 450px;
  width: 100%;
}
.errorMsg {
  margin-left: 1rem;
  color: red;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.formData {
  margin-bottom: 4rem;
}
.radioBtn {
  margin-left: 0.5rem;
}</style>