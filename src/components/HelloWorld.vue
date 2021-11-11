<script setup>
import {onMounted, ref, reactive} from "vue";
import {useStore} from 'vuex';
import {GET_USER_MSG} from "/@/store/modules/user/constant";

const store = useStore();

console.log(store.state.User.name, '-->state');
console.log(store.getters['User/showName'], '--->getters')
store.dispatch(`User/${GET_USER_MSG}`)
store.commit(`User/${GET_USER_MSG}`, 'nice')


</script>

<template>
  Hello World
</template>


<style lang="scss">

</style>
