<template>
  <div>
    <h2>Username: {{ username }}</h2>
    <h3>Age: {{ age }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
};
</script>
