
<template>
<main class="flex justify-center w-half h-screen">
    <div>
        <form @submit="onFormSubmit()" class="bg-gray-200 flex justify-center border-black rounded-lg border-2 pr-0 pl-0">
            <table>
                <h2 class="text-teal-500  text-xl font-bold pt-6">Employee Management Sytem</h2>
                <hr />
                <br />
                <label class="pt-10 py-10 " for="firstname">First Name </label><br />
                <input type="text"  id="firstname" name="firstname" placeholder="Enter your First name" /><br /><br />

                <label for="lastname">Last name:</label><br />
                <input type="text"  id="lastname" name="lastname" placeholder="Enter your Last name" /><br /><br />

                <label for="mobile">Mobile: </label><br />
                <input type="number" id="mobile" name="mobile" placeholder="Enter your Mobile" />
                <br /><br />

                <label for="salary">Salary: </label><br />
                <input type="number"  id="salary" name="salary" placeholder="Enter your Salary" />
                <br /><br />

                <label for="email"> Email: </label><br />
                <input type="email" id="email" name="email" placeholder="Enter your Email" />
                <br /><br />


                <label for="address"> Address: </label><br />
                <input type="text"  id="address" name="address" placeholder="Enter your Address" />
                <br /><br />

               <div>   
                    <button class="py-1 px-5 mr-5 bg-green-500 hover:bg-green-800 text-white font-bold text-center rounded-md mb-3" type="submit" @click="formSubmit"> Submit </button>
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
            <tr v-for="(item) in state.employeeData" :key="item.id">
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
<script setup>
let state = reactive({
    employeeData: []
});
getEmpAPI();
// GET API
async function getEmpAPI() {
    state.employeeData = await $fetch('http://localhost:3001/emp');
}
// POST API
async function onFormSubmit() {
    const sampleData = {
        "id": state.employeeData.length,
        "firstname": state.employeeData.length,
        "lastname": state.employeeData.length,
        "mobile": state.employeeData.length,
        "salary":state.employeeData.length,
        "email": state.employeeData.length,
        "address":state.employeeData.length
        
        
    };
    getEmpAPI();
}
// PATCH API
// async function onClickOfEditProduct(studentId) {
//     const sampleData = {
//         "id": studentId,
//         "productName": studentId,
//         "price": state.studentData.length,
//         "stock": state.studentData.length,
//         "size": state.studentData.length,
//         "image": state.studentData.length
//     };
//     getProductAPI();
// }
// // Delete API
async function onDeleteOfEmployee(id) {
    await $fetch('http://localhost:3001/emp/' + id, {
        method: 'DELETE'
    });
    getEmpAPI();
}
</script>




