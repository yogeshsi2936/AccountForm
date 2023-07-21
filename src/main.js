import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';

Validator.extend('firstNameValidator', {
  getMessage: (field) =>{
      console.log(field);
     `${field} can only contain alphanumeric characters and spaces.`
  },
  validate: (value) => /^[a-zA-Z0-9\s]+$/.test(value),
});
Validator.extend('birthDate', {
  getMessage: (field,args) => {
    const ageLimit = args[0] ;
    const birthDate = new Date(args[1]);
    const currentDate = new Date();
    const timeDiffInMilliseconds = currentDate - birthDate;
    const oneYearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25; 
    const ageDifferenceInYears  = Math.floor(timeDiffInMilliseconds / oneYearInMilliseconds);
     if (ageDifferenceInYears < 0 ) {
      return 'please select proper age'
    }else if (ageDifferenceInYears < ageLimit) {
      return `Your are not eligible age limit is ${ageLimit}`
    }
  },
  validate: (value,args) => {
    const ageLimit = args[0] ;
    const selectedDate = new Date(value);
    const currentDate = new Date();
    const timeDiffInMilliseconds = currentDate - selectedDate;
    const oneYearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25; 
    const ageDifferenceInYears  = Math.floor(timeDiffInMilliseconds / oneYearInMilliseconds);
    if (ageDifferenceInYears <= 0 ) {
      return false
    }else if (ageDifferenceInYears < ageLimit) {
      return false
    }else {
      return true
    }
  },
});

Validator.extend('stateValidator', {
  getMessage: () => "State must have atleast 5 min character.",
  validate: (value, [otherValue]) => {
    if (otherValue === 'india') {
      return true
    }
    const isValidState = value.trim().length >= 5 ?  true : false
    return isValidState
  },
});

Validator.extend('phoneValidator', {
  getMessage: (field,args) => {
    if (args[0].trim().length === 0) {
      return  "Please select one country first." 
    }
    else if (args[0] === 'india') {
      return 'Please entre mobile no with 10 digit'
    }else{
      return 'Please entre mobile min 5 digit'
    }
  },

  validate: (value,[otherValue]) => {
    if (otherValue === '') {
      return false
    }
    else if (otherValue === 'india') {
      const val = value.trim().length === 10  ? true : false ;
      return val
    }else {
      const val = value.trim().length >= 5 ?  true : false ;
      return val
    }
  },
});

Validator.extend('genderValidator', {
  getMessage: () => "Gender Must be selected.",
  validate: (value) => {
    if (value.trim().length > 0) {
      return true
    }else {
      return false
    }
  },
});

Validator.extend('countrySelectValidator', {
  getMessage: () => "Country Must be selected.",
  validate: (value) => {
    if (value.trim().length > 0) {
      return true
    }else {
      return false
    }
  },
});
Vue.use(VeeValidate);

import './assets/main.css'

new Vue({
  render: (h) => h(App)
}).$mount('#app')
