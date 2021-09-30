<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="">Nome</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="">Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label for="">E-mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>

    <button>Add Friend</button>
  </form>
</template>

<script>
export default {
  emit: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
