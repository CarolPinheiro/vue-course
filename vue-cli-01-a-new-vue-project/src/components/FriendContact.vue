<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleButtons">Show Details</button>
    <ul v-if="toggleButton">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>E-mail:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress"],
  data() {
    return {
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
      toggleButton: false,
    };
  },
  methods: {
    toggleButtons() {
      this.toggleButton = !this.toggleButton;
    },
  },
};
</script>
