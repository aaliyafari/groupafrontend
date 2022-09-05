<template>
    <div class="">
        <form @submit.prevent="onFormSubmit()" class="px-4 my-10 max-w-3xl mx-auto space-y-3 drop-shadow-md"
            method="post">
            <h1 class="text-3xl font-semibold text-center">Student Management</h1>
            <hr class="bg-black">
            <div class="flex space-x-4">
                <div class="w-1/2">
                    <label for="Name">First Name: </label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.firstname" ref="firstname" name="firstname" id="firstname">
                    <span v-for="error in v$.firstname.$errors" :key="error.$uid" class="text-red-600">{{
                         error.$message  }}</span>
                </div>
                <div class="w-1/2">
                    <label for="Name">Last Name:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.lastname" ref="lastname" name="lastname" id="lastname">
                    <span v-for="error in v$.lastname.$errors" :key="error.$uid" class="text-red-600">{{
                         error.$message  }}</span>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-1/2">
                    <label for="Name">Mobile Number:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.mobile" ref="mobile" name="mobile" id="mobile">
                    <span v-for="error in v$.mobile.$errors" :key="error.$uid" class="text-red-600">{{
                         error.$message  }}</span>
                </div>
                <div class="w-1/2">
                    <label for="Name">Email Id:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.email" ref="email" name="email" id="email">
                    <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-600">{{
                         error.$message  }}</span>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-1/2">
                    <label for="Name">Address:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.address" ref="address" name="address" id="address">
                    <span v-for="error in v$.address.$errors" :key="error.$uid" class="text-red-600">{{
                         error.$message  }}</span>
                </div>
                <div class="w-1/2">
                    <label for="Name">Course:</label>
                    <select v-model="state.id" multiple="true" ref="course_name"
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        name="course_name" id="course_name">
                        <option v-for="item in state.course_name" :key="item.id" :value="item.id">
                            {{  item.course_name  }}
                        </option>
                    </select>
                    <!-- {{
                     state.course_name 
                    }} -->
                </div>
                <!-- <select v-model="state.id" multiple="true" class="font-bold sm:w-52 p-2 rounded-md py-2 pr-4 ml-2 mb-2">
                    <option v-for="item in state.course_name" :key="item.id" :value="item.id">
                        {{  item.id  }}.{{  item.course_name  }}
                    </option>
                </select>
                {{
                 state.course_name 
                }} -->

            </div>
            <!-- <div class="flex space-x-4">
                <div class="w-full">
                    <label for="Name">Photo:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" v-model="state.student.image" ref="image" name="firstname" id="firstname">
                </div>

            </div> -->
            <div class="form_action_button space-x-2">
                <button class="border border-gray-400 px-4 py-2 max-w-xs rounded bg-teal-600 text-white"
                    type="submit">Submit</button>
            </div>
            <!-- <span v-for="error in v$.$errors" :key="error.$uid">{{  error.$property  }}----{{  error.$message  }}</span> -->
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
                    <!-- <th>course_name</th> -->
                    <!-- <th>Image</th> -->
                    <th colspan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="(item, index) in studentData" v-bind:index="index" :key="item.id"> -->
                <tr v-for="(item) in state.studentData" :key="item.id">
                    <td>{{  item.id  }}</td>
                    <td>{{  item.firstname  }}</td>
                    <td>{{  item.lastname  }}</td>
                    <td>{{  item.mobile  }}</td>
                    <td>{{  item.email  }}</td>
                    <td>{{  item.address  }}</td>
                    <!-- <td>{{  item.course_name  }}</td> -->

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
import useVuelidate from "@vuelidate/core";
import { alpha, email, maxLength, minLength, numeric, required } from "@vuelidate/validators";
let state = reactive({
    studentData: [],
    student: {
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        address: ""
    },
    course_name: [],
    id: []
});

const rules = computed(() => {
    return {
        firstname: {
            required,
            alpha,
            minLength: minLength(2),
            maxLength: maxLength(20)

        },
        lastname: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(20)

        },
        mobile: {
            required,
            numeric

        },
        email: { required, email },
        address: { required }
    }

});

const v$ = useVuelidate(rules, state.student)
getStudentAPI();

// GET API
async function getStudentAPI() {
    state.studentData = await $fetch('http://localhost:3001/student/allData');
}
// POST API
async function onFormSubmit() {
    const result = await v$.value.$validate();
    if (result) {
        alert("Student data is added");
    } else {
        alert("student data is not createds");
    }

    const payload: any = state.student;
    payload.mobile = parseInt(payload.mobile, 10);
    await $fetch("http://localhost:3001/student", {
        method: "POST",
        body: JSON.stringify(payload),

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

getCourse();
// GET Course API
async function getCourse() {
    state.course_name = await $fetch("http://localhost:3001/course");
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