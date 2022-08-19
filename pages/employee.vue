
<template>
<main class="flex justify-center w-half h-screen">
    <div>
        <form @submit="formSubmit" class="bg-gray-200 flex justify-center border-black rounded-lg border-2 pr-0 pl-0">
            <table>
                <h2 class="text-teal-500  text-xl font-bold pt-6">Employee Management Sytem</h2>
                <hr />
                <br />
                <label class="pt-10 py-10 " for="firstname">First Name </label><br />
                <input type="text" v-model="user.firstname" id="firstname" name="firstname" placeholder="Enter your First name" /><br /><br />

                <label for="lastname">Last name:</label><br />
                <input type="text" v-model="user.lastname" id="lastname" name="lastname" placeholder="Enter your Last name" /><br /><br />

                <label for="mobile">Mobile: </label><br />
                <input type="number" v-model="user.mobile" id="mobile" name="mobile" placeholder="Enter your Mobile" />
                <br /><br />

                <label for="salary">Salary: </label><br />
                <input type="number" v-model="user.salary" id="salary" name="salary" placeholder="Enter your Salary" />
                <br /><br />

                <label for="email"> Email: </label><br />
                <input type="email" v-model="user.email" id="email" name="email" placeholder="Enter your Email" />
                <br /><br />


                <label for="address"> Address: </label><br />
                <input type="text" v-model="user.address" id="address" name="address" placeholder="Enter your Address" />
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
                <th class="px-4 border-black rounded-lg border-2">First Name</th>
                <th class="px-4 border-black rounded-lg border-2">Last Name</th>
                <th class="px-4 border-black rounded-lg border-2">Mobile</th>
                <th class="px-4 border-black rounded-lg border-2">Salary</th>
                <th class="px-4 border-black rounded-lg border-2">Email</th>
                <th class="px-4 border-black rounded-lg border-2">Address</th>
                <th class="px-4 border-black rounded-lg border-2">Action</th>
            </tr>
            <tr v-for="(item,index) in users" v-bind:index="index" :key="item">
                <!-- <td class="px-4 border-black rounded-lg border-2">{{item.id=i+1}}</td>  -->
                <td class="px-4 border-black rounded-lg border-2">{{item.firstname}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.lastname}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.mobile}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.salary}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.email}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.address}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.Action}}
                    <button class="mx-3 py-1 px-4  bg-green-500 hover:bg-green-800 text-white font-bold text-center rounded-md mb-3" @click="userDelete(index)">
                        Delete
                    </button>
                    <button class="mx-3 py-1 px-4  bg-red-500 hover:bg-red-800 text-white font-bold text-center rounded-md mb-3" @click=" onEdit(index)">
                      Edit
                    </button>
                </td>
            </tr>
        </table>
    </div>
</main>
</template>
<script>
export default {
    data() {
        return {
            users: [],
            user: {
                firstname: '',
                lastname: '',
                mobile: '',
                salary: '',
                email: '',
                address: ''
                
            },
        };
    },
    methods: {
        formSubmit(event) {
            event.preventDefault();
            this.users.push(this.user);
            this.user = {
                firstname: '',
                lastname: '',
                mobile: '',
                salary: '',
                email: '',
                address: ''
            };
        },
        onReset(event) {
            event.preventDefault();
            this.form.firstname = "";
            this.form.lastname = "";
            this.form.mobile = "";
            this.form.salary = "";
            this.form.email = "";
            this.form.address = "";
        },
        userDelete(index) {
            this.users.splice(index, 1)
        },

        onEdit(index) {
            this.user.firstname = this.users[index].firstname;
            this.user.lastname = this.users[index].lastname;
            this.user.mobile = this.users[index].mobile;
            this.user.salary = this.users[index].salary;
            this.user.email = this.users[index].email;
             this.user.address = this.users[index].address;
          
            this.isEdit = true;
            this.indexEdit = index;
        },

            validationfirstname() {
            if (!isNaN(this.user.firstname) || this.user.firstname == null || this.user.firstname == "") {
                alert("Please Enter Firstname");
                // console.log("Please Enter Name");
                this.resetForm();
            } else {
                console.log(this.user.firstname);
                // alert("Name is valid");
            }
        },


        //    validationfirstname() {
        //     if (!isNaN(this.user.firstnamename) || this.user.firstname == null || this.user.firstname == "") {
        //         alert("Please Enter Firstname");
        //         // console.log("Please Enter Name");
        //         this.resetForm();
        //     } else {
        //         console.log(this.user.firstname);
        //         // alert("Name is valid");
        //     }
        // },
        
    }
}
</script>