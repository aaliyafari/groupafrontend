<template>
  <div>
    <h1 class="font-bold text-center text-2xl mt-10 text-green-400">
      Product Management
    </h1>
    <div class="grid grid-cols-2">
      <div class="border-black border-2 m-8 p-8">
        <form
          @submit="formSubmit"
          class="bg-green-100 border-green-400 rounded-lg border-2 px-12"
        >
          <table>
            <h2 class="text-teal-900 text-xl font-bold pt-6">“Add Product”</h2>
            <hr />
            <label class="pt-10 py-10" for="ProductName">Product Name:</label
            ><br />
            <input
              type="text"
              v-model="user.ProductName"
              id="ProductName"
              name="ProductName"
              placeholder=""
            /><br /><br />
            <label for="Price">Price:</label
            ><br />
            <input
              type="number"
              v-model="user.Price"
              id="Price"
              name="Price"
              placeholder=""
            /><br /><br />
            <label for="state">Stock:</label>
            <select class="p-1" name="Stock" id="Stock" v-model="user.Stock">
              <option value="Available" selected>Available</option>
              <option value="Out of Stock ">Out of Stock</option></select
            ><br /><br />
            <label for="state">Size:</label>
            <select class="p-1" name="Size" id="Size" v-model="user.Size">
              <option value="XS">XS</option>
              <option value="S ">S</option>
              <option value="M" selected>M</option>
              <option value="L">L</option>
              <option value="XL">XL</option></select
            ><br /><br />
            <label for="Image">Upload Image</label
            ><br /><br />
            <input
              type="file"
              v-bind="user.Image"
              id="Image"
              name="Image"
            /><br /><br />
            <div class="mt-10">
              <button
                class="
                  py-1
                  px-5
                  mr-5
                  bg-black
                  hover:bg-blue-400
                  text-white
                  font-bold
                  text-center
                  rounded-md
                  mb-3
                "
                type="submit"
                @click="formSubmit"
              >
                Add Product
              </button>
              <button
                class="
                  py-1
                  px-5
                  bg-black
                  hover:bg-blue-400
                  text-white
                  font-bold
                  text-center
                  rounded-md
                  mb-3
                "
                type="reset"
              >
                Reset
              </button>
            </div>
          </table>
        </form>
      </div>
      <div class="border-black border-2 m-8 p-8">
        <table class="list">
          <tr>
            <!-- <th class="px-4 border-black rounded-lg border-2">id</th> -->
            <th class="px-4 border-green-400 rounded-lg border-4">
              ProductName
            </th>
            <th class="px-4 border-green-400 rounded-lg border-4">Price</th>
            <th class="px-4 border-green-400 rounded-lg border-4">Stock</th>
            <th class="px-4 border-green-400 rounded-lg border-4">Size</th>
            <th class="px-4 border-green-400 rounded-lg border-4">Image</th>
            <th class="px-4 border-green-400 rounded-lg border-4">Action</th>
          </tr>
          <tr v-for="(item, index) in users" v-bind:index="index" :key="item">
            <!-- <td class="px-4 border-black rounded-lg border-2">{{item.id=i+1}}</td> -->
            <td class="px-4 border-green-400 rounded-lg border-4">
              {{ item.ProductName }}
            </td>
            <td class="px-4 border-green-400 rounded-lg border-4">
              {{ item.Price }}
            </td>
            <td class="px-4 border-green-400 rounded-lg border-4">
              {{ item.Stock }}
            </td>
            <td class="px-4 border-green-400 rounded-lg border-4">
              {{ item.Size }}
            </td>
            <td class="px-4 border-green-400 rounded-lg border-4">
              <img src="{{item.Image}}" alt="" srcset="" />
            </td>
            <td class="px-4 border-green-400 rounded-lg border-4">
              {{ item.Action }}
              <button
                class="
                  mx-3
                  rounded-lg
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  w-20
                "
                @click="userDelete(index)"
              >
                Delete
              </button>
              <button
                class="
                  mx-3
                  rounded-lg
                  bg-green-600
                  hover:bg-green-600
                  text-white
                  w-20
                "
                @click="onEdit(index)"
              >
                Edit
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEdit: false,
      indexEdit: -1,
      users: [],
      userAddress: "",
      user: {
        ProductName: "",
        Price: "",
        Stock: "",
        Size: "",
        Image: "",
      },
    };
  },
  methods: {
    formSubmit(event) {
      event.preventDefault();
      // if(this.user.ProductName==""||this.user.ProductName==null||this.user.Price==""|| this.user.Price==null|| this.user.Stock==""||this.user.Stock==null|| this.user.Color==""||this.user.Color==null)
      // {alert("please fill all the fields");
      // this.onReset();
      // }else{console.log("Hi");}
      if (this.isEdit == true) {
        this.users[this.indexEdit] = this.user;
        this.isEdit = false;
        this.indexEdit = -1;
      } else {
        this.users.push(this.user);
      }
      this.user = {
        ProductName: "",
        Price: "",
        Stock: "",
        Size: "",
        Image: "",
      };
    },
    onReset(event) {
      event.preventDefault();
      this.form.ProductName = "";
      this.form.Price = "";
      this.form.Stock = "";
      this.form.Size = "";
      this.form.Image = "";
    },
    userDelete(index) {
      this.users.splice(index, 1);
    },
    onEdit(index) {
      this.user.ProductName = this.users[index].ProductName;
      this.user.Price = this.users[index].Price;
      this.user.Stock = this.users[index].Stock;
      this.user.Size = this.users[index].Size;
      this.user.Image = this.users[index].Image;
      this.isEdit = false;
      this.indexEdit = index;
    },
  },
};
</script>







