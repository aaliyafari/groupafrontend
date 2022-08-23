<template>
    <div class="">
        <form class="px-4 my-10 max-w-3xl mx-auto space-y-3 drop-shadow-md" method="post">
            <h1 class="text-3xl font-semibold text-center">Student Management</h1>
            <hr class="bg-black">
            <div class="flex space-x-4">
                <div class="w-1/2">
                    <label for="Name">First Name: </label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.firstname" ref="firstname" name="firstname" id="firstname"
                        required>
                </div>
                <div class="w-1/2">
                    <label for="Name">Last Name:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.lastname" ref="lastname" name="lastname" id="lastname"
                        required>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-1/2">
                    <label for="Name">Mobile Number:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.mobile" ref="mobile" name="mobile" id="mobile" required>
                </div>
                <div class="w-1/2">
                    <label for="Name">Email Id:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.email" ref="email" name="email" id="email" required>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-1/2">
                    <label for="Name">Address:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.address" ref="address" name="address" id="address" required>
                </div>
                <div class="w-1/2">
                    <label for="Name">Course:</label>
                    <select v-model="state.student.course_name" ref="course_name"
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        name="course_name" id="course_name">
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                        <option value="MTech">MTech</option>
                        <option value="BCS">BCS</option>
                    </select>
                </div>

            </div>
            <div class="flex space-x-4">
                <div class="w-full">
                    <label for="Name">Photo:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.image" ref="image" name="firstname" id="firstname">
                </div>

            </div>
            <div class="form_action_button space-x-2">
                <button class="border border-gray-400 px-4 py-2 max-w-xs rounded bg-teal-600 text-white"
                    @click="onFormSubmit()" type="button">Submit</button>
            </div>

        </form>


        <!-- Display the data in Table format -->
        <table class="table-auto">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile</th>
                    <th>Email Id</th>
                    <th>Address</th>
                    <th>course_name</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(item, index) in studentData" v-bind:index="index" :key="item.id"> -->
                <tr v-for="(item) in state.studentData" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.firstname }}</td>
                    <td>{{ item.lastname }}</td>
                    <td>{{ item.mobile }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.course_name }}</td>

                    <td><button class="border border-gray-400 px-2 py-1 max-w-xs rounded bg-teal-600 text-white"
                            type="submit" value="Submit">Edit</button></td>
                    <td><button @click="onDeleteOfStudent(item.id)"
                            class="border border-gray-400 px-2 py-1 max-w-xs rounded bg-teal-600 text-white"
                            type="submit" value="Submit">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script  setup lang="ts">
let state = reactive({
    studentData: [],
    student: {
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        address: "",
        course_name: "",
        image: "abc"
    },
});
console.log(state.studentData)

getStudentAPI();

// GET API
async function getStudentAPI() {
    state.studentData = await $fetch('http://localhost:3001/student/allData');
}
// POST API
async function onFormSubmit() {
    console.log(state.student);
    
    await $fetch("http://localhost:3001/student", {
        method: "POST",
        body: JSON.stringify(state.student),

    });
    
    getStudentAPI();
}


// Delete API
async function onDeleteOfStudent(id) {
    await $fetch('http://localhost:3001/student/' + id, {
        method: 'DELETE'
    });
    getStudentAPI();
}
</script>


<style>
table,
tr,
td,
th {
    border: 1px solid gray;
}
</style>