<template>
  <div>
    <v-form >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="username"
              :counter="10"
              label="User name"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              :counter="10"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="password"
              label="Password"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-btn
              color="success"
              class="mr-4"
              @click="submit"
            >submit</v-btn>
          </v-col>

        </v-row>
      </v-container>
    </v-form>
</div>
</template>

<script>

export default {
    data(){
      return{
    username:'',
    email:'',
    password:''

}
    },
    methods:{
async submit(e){
    e.preventDefault();
     console.log(this.firstname,this.lastname,this.email)
     await fetch("http://localhost:8080/users/create",{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify({
            username:this.username,
            email:this.email,
            password:this.password
        })
        
     }).then(res=>res.json())
    }
    }
    

}
</script>

<style>

</style>