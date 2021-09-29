<template>
  <li>
    <h2>{{ name }} {{ favoriteFriend === "0" ? "" : "(Favorite)" }}</h2>
    <button @click="toggleButtons">Show Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="toggleButton">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>E-mail:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: String,
      required: false,
      default: "0",
      validator(value) {
        return value === "1" || value === "0";
      },
    },
  },
  data() {
    return {
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
      toggleButton: false,
      favoriteFriend: this.isFavorite,
    };
  },
  methods: {
    toggleButtons() {
      this.toggleButton = !this.toggleButton;
    },
    toggleFavorite() {
      this.favoriteFriend === "0"
        ? (this.favoriteFriend = "1")
        : (this.favoriteFriend = "0");
    },
  },
};
</script>
