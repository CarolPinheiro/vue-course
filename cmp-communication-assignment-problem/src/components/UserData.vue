<template>
  <form @submit.prevent="$emit('submit-user', username, age)">
    <label for="">
      Username:
      <input type="text" v-model="username" />
    </label>
    <label for="">
      Age:
      <input type="num" v-model="age" />
    </label>
    <button>Adicionar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      age: "",
    };
  },
};
</script>
