<template>
  <div class="greetings">
    <h3>
      Account Form
    </h3>
    <div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <!-- First Name -->
          <div>
            <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
              <p><label>First Name</label></p>
              <input v-model="formData.firstName" type="text">
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <!-- last Name -->
          <div>
            <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
              <p><label> Last Name</label></p>
              <input v-model="formData.lastName" type="text">
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <!-- email -->
          <div>
            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
              <p><label>Email address </label></p>
              <input v-model="formData.email" type="email">
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <!-- Mobile No -->
          <div>
            <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
              <p><label> Last Name</label></p>
              <input v-model="formData.lastName" type="text">
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <!-- Country  -->
          <div>
            <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
              <p><label> Country</label></p>
              <select v-model="selectedOption" v-validate="'required'">
                <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
              </select>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <!-- State  -->
          <div>
              <p><label> State</label></p>
              <div v-if ="selectedOption == 'option1'">
            <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
                <p>option1 selected</p>
                <!-- <select v-model="formData.state">
                  <option value="">
                  </option>
                  <option v-for="state in stateList" :value="state">
                    {{ state }}
                  </option>
                </select> -->
            </ValidationProvider>

              </div>
            <div v-else>
            <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
                <p>option 1 not selected</p>
                <!-- <input v-model="formData.lastName" type="text"> -->
            </ValidationProvider>
          </div>

          </div>

          <!-- Dob  -->
          <div>
            <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
              <p><label> Date of birth</label></p>
              <input v-model="formData.lastName" type="text">
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <!-- Gender  -->
          <div>
            <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
              <p><label> Gender </label></p>
              <span v-for="gender in genderList">
                  <label for="male">
                    <input type="radio" id="male" :value= gender v-model="formData.gender">{{ gender }}
                  </label>
              </span  >
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <button class="submitBtn" type="submit">Submit</button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script >
export default {
  name: "AccountForm",
  data: () => ({
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      region: '',
      dob: null,
      gender: ''
    },
    selectedOption: null,
    genderList : ['male' , 'female'],
    options: [{ value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },],
    stateList: ['Andhra Pradesh', 'Arunachal Pradesh','Assam' ,'Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Karnataka'
                ,'Kerala', 'Maharashtra', 'Meghalaya' ,'Rajasthan','West Bengal']

  }),
  methods: {
    onSubmit() {
      alert('Form has been submitted!');
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h3 {
  font-size: 1.2rem;
}

.submitBtn {
  margin-top: 1rem;
}
</style>
