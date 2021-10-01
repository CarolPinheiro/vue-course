<template>
  <div>
    <user-data @submit-user="submittingFriend"></user-data>
    <active-user
      v-for="(user, index) in users"
      :key="index"
      :username="user.username"
      :age="user.age"
    ></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    submittingFriend(username, age) {
      this.users = [...this.users, { username, age }];
    },
  },
};
</script>
