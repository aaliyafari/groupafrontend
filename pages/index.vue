<template>

  <div>
    <div class="bg-red-300 text-3xl font-semibold text-center mb-20 ">
      Welcome to Group A Project
    </div>
    <div class="grid grid-rows-3 grid-flow-col content-center mt-20">

      <NuxtLink to="/user">
        <div class="cols col-2">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full " src="/images/users.png" alt="Sunset in the mountains">
            <div class="px-6 py-4">
              <div class=" text-center font-bold text-lg mb-2">User Management</div>

            </div>

          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/employee">
        <div class="cols col-2">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/images/employee.jpg" alt="Sunset in the mountains">
            <div class="px-6 py-4">
              <div class=" text-center font-bold text-lg mb-2">Employee Management</div>
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/product">
        <div class="cols col-2">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/images/product.jfif" alt="Sunset in the mountains">
            <div class="px-6 py-4">
              <div class=" text-center font-bold text-lg mb-2">Product Management</div>
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/book">
        <div class="cols col-2">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/images/Books.jpg" alt="Sunset in the mountains" width="20px" height="50px">
            <div class="px-6 py-4">
              <div class=" text-center font-bold text-lg mb-2">Book Management</div>
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/student">
        <div class="cols col-2">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/images/student.jfif">
            <div class="px-6 py-4">
              <div class=" text-center font-bold text-lg mb-2">Student Management</div>

            </div>

          </div>
        </div>
      </NuxtLink>

    </div>


  </div>

</template>
<script >

</script>
<style scoped>
</style>