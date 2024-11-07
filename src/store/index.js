// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      users: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
      ],
      posts: {
        1: [{ id: 1, title: 'John’s First Post' }, { id: 2, title: 'John’s Second Post' }],
        2: [{ id: 1, title: 'Jane’s First Post' }],
        3: [{ id: 1, title: 'Alice’s First Post' }, { id: 2, title: 'Alice’s Second Post' }, { id: 3, title: 'Alice’s Third Post' }]
      }
    };
  },
  getters: {
    getUserById: (state) => (id) => {
      return state.users.find(user => user.id === Number(id)) || { name: 'Unknown User' };
    },
    getPostsByUserId: (state) => (id) => {
      return state.posts[id] || [];
    }
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
    },
    addPost(state, { userId, post }) {
      if (state.posts[userId]) {
        state.posts[userId].push(post);
      } else {
        state.posts[userId] = [post];
      }
    }
  }
});

export default store;
