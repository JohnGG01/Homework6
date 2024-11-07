<!-- App.vue -->
<template>
  <div id="app">
    <h1>User Settings and Posts Application</h1>
    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';

export default {
  components: {
    UserList,
  },
};
</script>