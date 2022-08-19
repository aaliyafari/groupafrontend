<template>
<main class="flex justify-center w-full h-screen">
    <div>
        <form @submit="formSubmit" class="bg-gray-100 border-black rounded-lg border-2 px-12">
            <table>
                <h2 class="text-teal-900 text-xl font-bold pt-6">Book Management</h2>
                <hr />
                <br />
                <label class="pt-10 py-10 " for="bookname">Book name:</label><br />
                <input type="text" v-model="user.bookname" id="bookname" name="bookname" placeholder="Enter your book name" /><br /><br />

                <label for="authorname">Author name:</label><br />
                <input type="text" v-model="user.authorname" id="authorname" name="authorname" placeholder="Enter your Author name" /><br /><br />
                
                <label for="price"> Price: </label><br />
                <input type="number" v-model="user.price" id="price" name="price" placeholder="Enter book price" />
                <br /><br />
                
                <label for="image">Book Image: </label><br />
                <input type="image" v-model="user.image" id="image" name="image" placeholder="image" />
                <br /><br />

                <label for="isbnno">Book ISBN Number: </label><br />
                <input type="number" v-model="user.isbnno" id="isbnno" name="number" placeholder="Enter your ISBN number" />
                <br /><br />

                <div>
                    <button class="py-1 px-5 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3" type="submit" @click="formSubmit"> Submit </button>
                    <button class="py-1 px-5 bg-blue-500 hover:bg-blue-700 text-white font-bold text-center rounded-md mb-3" type="reset"> Reset </button>
                </div>
            </table>
        </form>
        <br>
        <table class="list">
            <tr>
                <!-- <th class="px-4 border-black rounded-lg border-2">id</th> -->
                <th class="px-4 border-black rounded-lg border-2">Book Name</th>
                <th class="px-4 border-black rounded-lg border-2">Author Name</th>
                <th class="px-4 border-black rounded-lg border-2">Price</th>
                <th class="px-4 border-black rounded-lg border-2">Book Image </th>
                <th class="px-4 border-black rounded-lg border-2">ISBN Number </th>
                <th class="px-4 border-black rounded-lg border-2">Action</th>
            </tr>
            <tr v-for="(item,index) in users" v-bind:index="index" :key="item">
                <!-- <td class="px-4 border-black rounded-lg border-2">{{item.id=i+1}}</td> -->
                <td class="px-4 border-black rounded-lg border-2">{{item.bookname}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.authorname}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.price}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.image}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.isbnno}}</td>
                <td class="px-4 border-black rounded-lg border-2">{{item.Action}}
                    <button class="mx-3" @click="userDelete(index)">
                        Delete
                    </button>
                    <button class="mx-3" @click="on(item.id)">
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
        }
    }
}
</script>