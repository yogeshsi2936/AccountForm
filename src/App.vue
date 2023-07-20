<template>
  <div id="app">
    <main>
      <AccountForm2/>
    </main>
  </div>
</template>

<script>
import AccountForm from './components/AccountForm.vue';
import AccountForm2 from './components/AccountForm2.vue';
// import { extend } from 'vee-validate';
// import { required, email } from 'vee-validate/dist/rules';
// import * as rules from 'vee-validate/dist/rules';
// extend('email', email);
// Object.keys(rules).forEach(rule => {
//   extend(rule, rules[rule]);
// });

// // Override the default message.
// extend('required', {
//   ...required,
//   message: 'This field is required'
// });

export default {
    name: "App",
    components: { AccountForm ,AccountForm2 }
};
</script>

<style scoped>
</style>
