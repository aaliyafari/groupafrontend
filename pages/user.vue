<template>
    <div>
        <div class="mt-5 md:mt-0 md:col-span-2">
      <form  method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              
              <div class="col-span-6 sm:col-span-3">
                <label for="user-name" class="block text-sm font-medium text-gray-700">User name</label>
                <input type="text" name="user-name" v-model="username" :v="v$.username" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email-address" v-model="user_email" :v="v$.user_email" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              

              <div class="col-span-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="text" name="password"  v-model="password" :v="v$.password" autocomplete="password" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" @click="submituser()"  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </div>

          <!-- <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="button" @click="updateuser()"  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
          </div> -->

          </div>
        </div>
      </div>
      </form>
    </div>

    <div class="container">
      <table :user="users" id="showdata">
        <tbody>
          <th class="">User ID</th>
          <th class="">USERNAME</th>
          <th class="">EMAIL</th>
          <th class="">PASSWORD</th>
          <!-- <th class="">IMAGE</th> -->
          <th class="" colspan="2">EDIT</th>
          <tr v-for="user in state.users" :key="user">
            <td class="">{{ user.id }}</td>
            <td class="">{{ user.username }}</td>
            <td class="">{{ user.user_email }}</td>
            <td class="">{{ user.password }}</td>
            <!-- <td class="">{{ user.image }}</td> -->
            <td class="w-56 h-10">
              <button 
                @click="editUser(user.id)"
              >
                <img src="assets\images\edit-solid.svg" alt="Edit"> 
                Edit
              </button>
            </td>
            <td class="w-10">
              <button
                class=""
                @click="deleteuser(user.id)"
              >
              <img class="w-10" src="assets\images\trash-can-solid.svg"/>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>


// export default {
//     data(){
//       return{
//     username:'',
//     email:'',
//     password:''

// }
//     },
//     methods:{
// async submit(e){
//     e.preventDefault();
//      console.log(this.firstname,this.lastname,this.email)
//      await $fetch("http://localhost:8080/users/create",{
//         method:"POST",
//         headers:{
//             "content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             username:this.username,
//             email:this.email,
//             password:this.password
//         })
        
//      }).then(res=>res.json())
//     }
//     }
    

// }

<script setup>

import useVuelidate, {
    required,
    email,
  } from '~/utils/vuelidate/useVuelidate';

import { ref } from 'vue';
  // const id=ref('');
  const username=ref('');
  const user_email=ref('');
  const password=ref('');
  // const image=ref('');
   
   let state = reactive({
    users:[]
   });

   const rules = {
    username:{required},
    user_email: { required,email },
    password: { required },
  };
  const v$ = useVuelidate(rules, state.users);
getUser();

   async function getUser(){
    state.users = await $fetch("http://localhost:8080/users")
   }
   
   async function deleteuser(id){
  await $fetch("http://localhost:8080/users/delete/"+id, {
    method: "DELETE",
  });
  getUser();
  }

async function submituser(){
  console.log("Post api is about to call")
    // e.preventDefault();
    const userData={
      username:username.value,
      user_email:user_email.value,
      password:password.value,
      // image:image.value
    };
    //  console.log(this.firstname,this.lastname,this.email)
     const res=await $fetch("http://localhost:8080/users/create",{
        method:"POST",
        // headers:{
        //     "content-Type":"application/json"
        // },
        body:JSON.stringify(userData),
     });
     getUser();
}
    //  async function editUser(user){
    //   this.id=user.id,
    //   this.username=user.username
    //   this.user_email=user.user_email
    //   this.password=user.password
    //   // this.image=user.image
    //  }
    //  console.log(this.firstname,this.lastname,this.email)
    // async function editUser(id){
    //   let userEdit=state.users.filter(()=>{
    //     if((user.id=id)){
    //       state.users.id=user.id;
    //       state.users.username=user.username;
    //       state.users.email=user.email;
    //       state.users.id=users.id;
    //     }
    //   })
    //  const res=await $fetch("http://localhost:8080/users/"+ id,{
    //     method:"PATCH",
    //     headers:{
    //         "content-Type":"application/json"
    //     },
    //     body:JSON.stringify(state.users),
    //  });
    //  getUser();
    //}

    
</script>

<style>

</style>