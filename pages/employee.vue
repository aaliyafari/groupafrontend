<template>
<main class="flex justify-center w-full h-screen">
    <div>
      
        <form
          method="post"
          class="bg-gray-100 flex justify-center border-black rounded-lg border-2 px-12"
        >
          <table>
            <h2 class="text-teal-500 text-xl font-bold pt-6">Employee Management System </h2>
            <hr /><br/>
            <div class="mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="id"
              >
                Employee id
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
                id="id"
                name="id"
                v-model="sampleData.id"
                type="number"
                placeholder="Enter Emp id"
              />
             
            </div>
            <div class="mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="firstname"
              >
               First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-500"
                id="firstname"
                name="firstname"
                v-model="sampleData.firstname"
                type="text"
                placeholder="Enter First Name"
              />
              <span
              v-for="error in v$.firstname.$errors"
              :key="error.$uid"
              class="text-red-400">
              {{error.$message}}
              </span>
            </div>
            <div class="">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="lastname"
              >
                 Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastname"
                name="lastname"
                v-model="sampleData.lastname"
                type="text"
                placeholder="Enter Last Name"
              /><br/>
              <span
               v-for="error in v$.lastname.$errors"
               :key="error.$uid"
               class="text-red-400"
              >
              {{error.$message}}
              </span>
               
              
            </div>

             <div class="">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="mobile"
              >
                Mobile
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="mobile"
                name="mobile"
                v-model="sampleData.mobile"
                type="number"
                placeholder="Enter Mobile no"
              /><br/>
              <span 
               v-for="error in v$.mobile.$errors"
               :key="error.$uid"
               class="text-red-400" >
               {{error.$message}}</span>
             
              
            </div>

             <div class="">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="salary"
              >
                 Salary
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="salary"
                name="salary"
                v-model="sampleData.salary"
                type="number"
                placeholder="Enter Salary"
              /><br/>
              <span
               v-for="error in v$.salary.$errors"
               :key="error.$uid"
               class="text-red-400">
               {{error.$message}}</span>
                
            </div>
 <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >
                   Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  v-model="sampleData.email"
                  type="email"
                  placeholder="Enter  Email"
                />
                <span
                  v-for="error in v$.email.$errors"
                  :key="error.$uid"
                  class="text-red-500"
                  >{{ error.$message }}</span
                >
              </div>
            </div>
            <div class="rounded mb-4 shadow appearance-none label-floating">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="address"
                > Address</label
              >
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                id="address"
                v-model="sampleData.address"
                name="address"
                placeholder="Enter Address"
              /><br/>
              <span
                v-for="error in v$.address.$errors"
                :key="error.$uid"
                class="text-red-500"
                >{{ error.$message }}</span
              >
               
              <label for="department">Select Department :</label>
            <select name="language" id="language" v-model="sampleData" >
            
            <option value="IT">IT</option>
              <option value="Non-IT">Non-IT</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
             
            </select>
              
            
            </div>
            <div id="hide">
              <button
                class="py-1 px-5 mr-5 bg-green-500 hover:bg-green-700 text-white font-bold text-center rounded-md mb-3"
                type="button"
                @click="Submit()"
              >
                Submit
              </button>
              <button
                class="py-1 px-5 bg-red-500 hover:bg-red-700 text-white font-bold text-center rounded-md mb-3"
                type="reset"
              >
                Reset
              </button>
            </div>
          </table>
        </form>

        <br/>
        <table class="list">
            <tr>
             
                <th class="px-4 border-black rounded-lg border-2">ID</th>
                <th class="px-4 border-black rounded-lg border-2">First Name</th>
                <th class="px-4 border-black rounded-lg border-2">Last Name</th>
                <th class="px-4 border-black rounded-lg border-2">Mobile</th>
                <th class="px-4 border-black rounded-lg border-2">Salary</th>
                <th class="px-4 border-black rounded-lg border-2">Email</th>
                <th class="px-4 border-black rounded-lg border-2">Address</th>
                <th class="px-4 border-black rounded-lg border-2">Department</th>
                <th class="px-4 border-black rounded-lg border-2">Action</th>
            </tr>
           
            <tr v-for="(item) of empp.allEmp" :key="item.id">
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.id }}
            </td>
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.firstname }}
            </td>
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.lastname }}
            </td>
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.mobile }}
            </td>
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.salary }}
            </td>
             <td class="px-4 border-black rounded-lg border-2">
              {{ item.email }}
            </td>
             <td class="px-4 border-black rounded-lg border-2">
              {{ item.address }}
            </td>
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.department }}
            </td>
            <td class="px-4 border-black rounded-lg border-2">
              {{ item.Action }}

                    <button class="mx-3 py-1 px-4  bg-green-500 hover:bg-green-800 text-white font-bold text-center rounded-md mb-3" @click="onDeleteOfEmployee(item.id)">
                        Delete
                    </button>
                    <button class="mx-3 py-1 px-4  bg-red-500 hover:bg-red-800 text-white font-bold text-center rounded-md mb-3" @click=" onEdit(item.id)">
                      Edit
                    </button>
                </td>
            </tr>
        </table>
    </div>
</main>
</template>
<script setup lang="ts">
import useVuelidate, {
  required,
  
  email,
  minLength,
  maxLength,
  helpers,
} from "~/utils/vuelidate/useVuelidate";
import { reactive, computed } from "vue"; 
const State = reactive({
  select: true,
  Submit: "submit",
  allEmp: [],
  employ: [],
  id: "",
  errorBack: {},
});

let sampleData =reactive(
  {
  id: null,
  firstname: "",
  lastname: "",
  mobile: "",
  salary: "",
  email:"",
  address:"",

});
 const containsUser = (value: any)=>{
  return value.includes("user");
 }

const empp = reactive({
  allEmp: [],
});
getApi();
async function getApi() {
  empp.allEmp = await $fetch("http://localhost:3001/emp/");
}
// POST API
async function Submit() {
  // alert("sds");
   event.preventDefault();
   const result = await v$.value.$validate();
  console.log(sampleData);
  // const payload = sampleData;
    sampleData.id = parseInt(sampleData.id, 10);
  await $fetch("http://localhost:3001/emp", {
    method: "POST",
    // body: JSON.stringify(sampleData),
    body: sampleData,

  
  });
  getApi();
}

// PATCH API
async function onEdit(id) {
    State.Submit = "Update";
  let empEdit = empp.allEmp.filter((employ) => {
    if (employ.id == id) {
      sampleData.id = employ.id;
      sampleData.firstname = employ.firstname;
      sampleData.lastname = employ.lastname;
      sampleData.mobile = employ.mobile;
      sampleData.salary = employ.salary;
       sampleData.email = employ.email;
        sampleData.address = employ.address;
      return employ;
    }
  });
  console.log(empEdit);
  const response = await $fetch("http://localhost:3001/emp/" + id, {
    method: "PATCH",
    body: sampleData,
  });
  getApi();
}

// Delete API
async function onDeleteOfEmployee(id: number) {
  await $fetch("http://localhost:3001/emp/" + id, {
    method: "DELETE",
  });
  getApi();
}



const rules = computed(() => {
  return {
    firstname: {
      required,
      minLength: minLength(3),
      
    },
    lastname: { required, minLength: minLength(3) },
    mobile: {required, maxlength: maxLength(10), 
    },
    salary: {required, maxlength: maxLength(15)},
    email: { required, email },
    address: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(30),
    },
  };
});
const v$ = useVuelidate(rules, sampleData);
</script>















