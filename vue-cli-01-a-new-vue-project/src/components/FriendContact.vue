<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleButtons">Show Details</button>
    <ul v-if="toggleButton">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>E-mail:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
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
