<template>
<h1>Hello user</h1>
<input  type="text" v-model="username" placeholder="username"/>
   <input  type="text" v-model="password" placeholder="email"/>
   <input  type="text" v-model="email" placeholder="password"/> 
   <button type="submit" @click="submit">submit</button>
</template>
<script setup lang="ts">
            const username=ref('');
            const password=ref('');
            const email=ref('')
       
        async function submit(){
          let formData = new FormData()
            formData.append('username', username.value);
            formData.append('email', email.value);
            formData.append('password', password.value);

        await $fetch('http://localhost:3000/users/create', {
        method: 'POST',
        body: formData
    });
        
    }
</script>
<style scoped>
 
</style>