<!-- UserList.vue -->
<template>
  <div>
    <h2>User List</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <h3>{{ user.name }}</h3>
        <ul>
          <li v-for="post in getPostsByUserId(user.id)" :key="post.id">
            {{ post.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['users']), // Maps 'users' from the store’s state
    ...mapGetters(['getPostsByUserId']) // Maps 'getPostsByUserId' from the store’s getters
  },
};
</script>