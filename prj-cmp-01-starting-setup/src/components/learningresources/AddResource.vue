<template
  ><span>
    <base-dialog v-if="isSubmitWithError" title="Invalid Submit">
      <template #default>
        <p>There's one input that are not right</p>
      </template>
    </base-dialog>
    <base-card>
      <form
        @submit.prevent="
          submitData(
            this.$refs.title.value,
            this.$refs.description.value,
            this.$refs.link.value
          )
        "
      >
        <div class="form-control">
          <label for="title">Title:</label>
          <input type="text" id="title" ref="title" />
        </div>
        <div class="form-control">
          <label for="description">Description:</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            ref="description"
          ></textarea>
        </div>
        <div class="form-control">
          <label for="link">Link:</label>
          <input type="url" id="link" ref="link" />
        </div>
        <div>
          <base-button>Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </span>
</template>
<script>
export default {
  data() {
    return {
      isSubmitWithError: false
    };
  },
  inject: ['addResource'],
  methods: {
    submitData(title, description, link) {
      if (
        title.trim() === '' ||
        description.trim() === '' ||
        link.trim() === ''
      ) {
        this.isSubmitWithError = true;
        return;
      }
      this.addResource(title, description, link);
    }
  }
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
