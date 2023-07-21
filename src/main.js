import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';
import './assets/main.css'

Validator.extend('DateValidator', {
  getMessage: (field,args) => {
    const ageLimit = args[0] ;
    const selectedDate = new Date(args[1]);
    const currentDate = new Date();
    const currentAge =  getCurrentAge(currentDate,selectedDate)
     if (currentAge < 0 ) {
      return 'Please select proper date'
    }else if (currentAge < ageLimit) {
      return `The age must be greater than ${ageLimit}`
    }
  },
  validate: (value,args) => {
    const ageLimit = args[0] ;
    const selectedDate = new Date(value);
    const currentDate = new Date();
    const currentAge =  getCurrentAge(currentDate,selectedDate)
    if (currentAge <= 0 ) {
      return false
    }else if (currentAge < ageLimit) {
      return false
    }else {
      return true
    }
  },
});

Validator.extend('phoneNumberValidator', {
  getMessage: (field) => `please enter valid phone number `,
  validate: (value,[otherValue]) => {
     if (otherValue === 'india') {
      const val = value.trim().length === 10  ? true : false ;
      return val
    }else {
      const val = value.trim().length >= 5 ?  true : false ;
      return val
    }
  },
});
function getCurrentAge(currentDate, selectedDate) {
  const timeDiffInMilliseconds = currentDate - selectedDate;
  const oneYearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25; 
  const ageDifferenceInYears  = Math.floor(timeDiffInMilliseconds / oneYearInMilliseconds);
  return ageDifferenceInYears
}

Vue.use(VeeValidate);

new Vue({
  render: (h) => h(App)
}).$mount('#app')
