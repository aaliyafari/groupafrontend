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
                        type="text" name="firstname" id="firstname" required>
                </div>
                <div class="w-1/2">
                    <label for="Name">Last Name:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" name="contact" id="contact" required>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-1/2">
                    <label for="Name">Mobile Number:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" name="firstname" id="firstname" required>
                </div>
                <div class="w-1/2">
                    <label for="Name">Email Id:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" name="contact" id="contact" required>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-full">
                    <label for="Name">Address:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="text" name="firstname" id="firstname" required>
                </div>

            </div>
            <div class="flex space-x-4">
                <div class="w-full">
                    <label for="Name">Photo:</label>
                    <input
                        class="border border-gray-400 block px-4 py-1 w-full rounded focus:outline-none focus:border-teal-500"
                        type="file" name="firstname" id="firstname" required>
                </div>

            </div>
            <div class="form_action_button space-x-2">
                <button class="border border-gray-400 px-4 py-2 max-w-xs rounded bg-teal-600 text-white" type="submit"
                    value="Submit">Submit</button>
            </div>
        </form>

        <!-- Display the dat in Table format -->
        <table class="table-auto">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile</th>
                    <th>Email Id</th>
                    <th>Address</th>
                    <th>File</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
table,
tr,
td,
th {
    border: 1px solid gray;
}
</style>
