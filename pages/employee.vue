
<template>
<main class="flex justify-center w-half h-screen">
    <div>
        <form class="bg-gray-200 flex justify-center border-black rounded-lg border-2 pr-0 pl-0">
            <table>
                <h2 class="text-teal-500  text-xl font-bold pt-6">Employee Management Sytem</h2>
                <hr />
                <br />
                 <label class="pt-10 py-10 " for="id">Employee id </label><br />
                <input type="text"  id="id" name="id" placeholder="Enter emp id"  v-model="sampleData.id"/><br /><br />


                <label class="pt-10 py-10 " for="firstname">First Name </label><br />
                <input type="text"  id="firstname" name="firstname" placeholder="Enter your First name"  v-model="sampleData.firstname"/><br /><br />

                <label for="lastname">Last name:</label><br />
                <input type="text"  id="lastname" name="lastname" placeholder="Enter your Last name"  v-model="sampleData.lastname"/><br /><br />

                <label for="mobile">Mobile: </label><br />
                <input type="number" id="mobile" name="mobile" placeholder="Enter your Mobile"  v-model="sampleData.mobile" />
                <br /><br />

                <label for="salary">Salary: </label><br />
                <input type="number"  id="salary" name="salary" placeholder="Enter your Salary"  v-model="sampleData.salary" />
                <br /><br />

                <label for="email"> Email: </label><br />
                <input type="email" id="email" name="email" placeholder="Enter your Email" v-model="sampleData.email"/>
                <br /><br />


                <label for="address"> Address: </label><br />
                <input type="text"  id="address" name="address" placeholder="Enter your Address" v-model="sampleData.address"/>
                <br /><br />

               <div>   
                    <button class="py-1 px-5 mr-5 bg-green-500 hover:bg-green-800 text-white font-bold text-center rounded-md mb-3" type="button" @click="Submit()"> Submit </button>
                    <button class="py-1 px-5 bg-red-500 hover:bg-red-800 text-white font-bold text-center rounded-md mb-3" type="reset"> Reset </button>
                </div>
            </table>
        </form>
        <br>
        <table class="list">
            <tr>
                <!-- <th class="px-4 border-black rounded-lg border-2">id</th> -->
                <th class="px-4 border-black rounded-lg border-2">ID</th>
                <th class="px-4 border-black rounded-lg border-2">First Name</th>
                <th class="px-4 border-black rounded-lg border-2">Last Name</th>
                <th class="px-4 border-black rounded-lg border-2">Mobile</th>
                <th class="px-4 border-black rounded-lg border-2">Salary</th>
                <th class="px-4 border-black rounded-lg border-2">Email</th>
                <th class="px-4 border-black rounded-lg border-2">Address</th>
                <th class="px-4 border-black rounded-lg border-2">Action</th>
            </tr>
            <tr v-for="(item) in empp.allEmp" :key="item.id">
                 <td class="px-4 border-black rounded-lg border-2">{{item.id}}</td> 
                <td class="px-4 border-black rounded-lg border-2">{{item.firstname}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.lastname}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.mobile}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.salary}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.email}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.address}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.Action}}
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
// const { data: count } = await useFetch("http://localhost:4000/employee/");
// const emp: any = count;
const empp = reactive({
  allEmp: [],
});
getApi();
async function getApi() {
  empp.allEmp = await $fetch("http://localhost:4000/emp/");
}
// POST API
async function Submit() {
  // alert("sds");
  // event.preventDefault();
  console.log(sampleData);
  // const payload = sampleData;
    sampleData.id = parseInt(sampleData.id, 10);
  await $fetch("http://localhost:4000/emp", {
    method: "POST",
    // body: JSON.stringify(sampleData),
    body: sampleData,

  
  });
  getApi();
}

// PATCH API
async function onEdit(id) {
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
  const response = await $fetch("http://localhost:4000/emp/" + id, {
    method: "PATCH",
    body: sampleData,
  });
  getApi();
}
// Delete API
async function onDeleteOfEmployee(id: number) {
  await $fetch("http://localhost:4000/emp/" + id, {
    method: "DELETE",
  });
  getApi();
}
</script>









