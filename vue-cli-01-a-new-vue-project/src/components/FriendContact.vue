<template>
  <li>
    <h2>{{ name }} {{ isFavorite === false ? "" : "(Favorite)" }}</h2>
    <button @click="toggleButtons">Show Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="$emit('delete', id)">Delete Friend</button>
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
    id: {
      type: String,
      required: true,
    },
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
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-favorite", 'delete'],
  data() {
    return {
      toggleButton: false,
    };
  },
  methods: {
    toggleButtons() {
      this.toggleButton = !this.toggleButton;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
