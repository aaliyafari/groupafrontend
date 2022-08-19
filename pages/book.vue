<template>
<main class="bg-[url(https://img.freepik.com/premium-photo/book-stack-library-room-blurred-bookshelf-background_42691-514.jpg?w=1300)] flex justify-center w-full h-screen">
    <div>
        <form @submit="formSubmit" class="flex justify-center bg-blue-100 border-black rounded-lg border-2 px-12">
            <table>
                <h2 class=" text-teal-900 text-xl font-bold pt-6">Book Management</h2>
                <hr />
                <br />
                <label class="pt-10 py-10 " for="bookname">Book name: </label>
                <input @change="validationbookname" type="text" v-model="user.bookname" id="bookname" name="bookname" placeholder="Enter your book name" /><br /><br />

                <label for="authorname">Author name:</label>
                <input @change="validationbookname" type="text" v-model="user.authorname" id="authorname" name="authorname" placeholder="Enter your Author name" /><br /><br />

                <label for="price"> Price: </label>
                <input @change="pricecheck" type="number" v-model="user.price" id="price" name="price" placeholder="Enter book price" />
                <br /><br />

                <label for="image">Book Image: </label>
                <input type="image" v-model="user.image" id="image" name="image" placeholder="image" />
                <br /><br />

                <label for="isbnno">Book ISBN Number: </label>
                <input type="number" v-model="user.isbnno" id="isbnno" name="number" placeholder="Enter your ISBN number" />
                <br /><br />
                <div>
                    <button class="py-1 px-5 mr-5 bg-red-500 hover:bg-red-700 text-white font-bold text-center rounded-md mb-3" type="submit" @click="formSubmit"> Submit </button>
                    <button class="py-1 px-5 bg-green-500 hover:bg-green-700 text-white font-bold text-center rounded-md mb-3" type="reset"> Reset </button>
                </div>
            </table>
        </form>
        <br>
        <table class="list">
            <tr>
                <!-- <th class="px-4 border-black rounded-lg border-2">id</th> -->
                <th class="px-4 border-black rounded-lg border-2">Book ID</th>
                <th class="px-4 border-black rounded-lg border-2">Book Name</th>
                <th class="px-4 border-black rounded-lg border-2">Author Name</th>
                <th class="px-4 border-black rounded-lg border-2">Price</th>
                <th class="px-4 border-black rounded-lg border-2">Book Image </th>
                <th class="px-4 border-black rounded-lg border-2">ISBN Number </th>
                <th class="px-4 border-black rounded-lg border-2">Action</th>
            </tr>
            <tr v-for="(item,i) in users" v-bind:index="index" :key="item">
                <td class="px-4 border-black rounded-lg border-2">{{item.id=i+1}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.bookname}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.authorname}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.price}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.image}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.isbnno}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.Action}}
                    <button class="mx-3 py-1 px-4 bg-red-500 hover:bg-red-700 text-white font-bold text-center rounded-md mb-3" @click="userDelete(index)">Delete </button>
                    <button class="mx-3 py-1 px-5 bg-red-500 hover:bg-red-700 text-white font-bold text-center rounded-md mb-3" @click="customEdit(i)">Edit </button>
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
                bookname: '',
                authorname: '',
                price: '',
                image: '',
                isbnno: '',
            },
        };
    },
    methods: {
        formSubmit(event) {
            event.preventDefault();
            this.users.push(this.user);
            this.user = {
                bookname: '',
                authorname: '',
                price: '',
                image: '',
                isbnno: ''
            };
        },
        
        onReset(event) {
            event.preventDefault();
            this.form.bookname = "";
            this.form.authorname = "";
            this.form.price = "";
            this.form.image = "";
            this.form.isbnno = "";
        },
        userDelete(index) {
            this.users.splice(index, 1)
        },
        customEdit(index) {
            this.user.bookname = this.users[index].bookname;
            this.user.authorname = this.users[index].authorname;
            this.user.price = this.users[index].price;
            this.user.image = this.users[index].image;
            this.user.isbnno = this.users[index].isbnno;
            this.isEdit = true;
            this.indexEdit = index;
        },

         validationbookname() {
            if (!isNaN(this.user.bookname) || this.user.bookname == null || this.user.bookname == "") {
                alert("Please Enter Name");
                this.resetForm();
            } 
            else {
                //alert("Name is valid");
            }
        },
         pricecheck() {
            if (isNaN(this.user.price) || this.user.price < 1000000000 || this.user.price > 9999999999) {
                alert("price is Invalid");
                this.resetForm();
            } else {
                // alert("Mobile Number is valid");
            }
        }
    }
}
</script>
