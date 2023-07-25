import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';
import './assets/main.css'
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper();
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
  getMessage: (field) => ` Please enter valid ${getTitleCase(field)} `,
  validate: (value,[otherValue]) => {
     if (otherValue === 'india') {
        return /^\d{10}$/.test(value);
    }else {
      if (value.trim().length >= 5) {
        return /^\d{5,}$/.test(value)
      }else{
        return false
      }
    }
  },
});

// create alphanumericspace validator 
Validator.extend('alpha_num_space', {
  getMessage: (field) => `${getTitleCase(field)} allow only alphanumeric characters and spaces`,
  validate: (value,) => {
   const isValidString =  /^[a-zA-Z0-9\s]*$/.test(value);
   return isValidString
  },
});

// function get title case 
function getTitleCase (text) {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult
}
function getCurrentAge(currentDate, selectedDate) {
  const timeDiffInMilliseconds = currentDate - selectedDate;
  const oneYearInMilliseconds = 1000 * 60 * 60 * 24 * 365.25; 
  const ageDifferenceInYears  = Math.floor(timeDiffInMilliseconds / oneYearInMilliseconds);
  return ageDifferenceInYears
}


const dict = {
  messages:{
    required : () => 'This is required field',
    alpha_spaces : (field) => `${field} only contain alphabetic characters as well as spaces`,
  }
};


Validator.localize('en', dict);
Vue.use(VeeValidate);

new Vue({
  render: (h) => h(App)
}).$mount('#app')
