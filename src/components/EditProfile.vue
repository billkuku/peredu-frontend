<template>
    <div>
        <form role="form">
            <div class="form-group">
                <table class="table">
                    <tr>
                        <td><label for="email" class="ctx-lable">Email:</label></td>
                        <td><input type="text" class="form-control profile-edit" id="email" placeholder="" disabled ></td>
                    </tr>
                    <tr>
                        <td><label for="username" class="ctx-lable">Current username:</label></td>
                        <td><input type="text" class="form-control profile-edit" id="username" placeholder="" disabled ></td>
                    </tr>
                   <tr>
                        <td><label for="newusername" class="ctx-lable">New username:</label></td>
                        <td><input type="text" class="form-control profile-edit" id="newusername" placeholder=""></td>
                    </tr>      
                </table>
            </div>

            <button type="submit" class="btn btn-default">Save</button>
        </form>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'EditProfile'
})
</script>

<style>

.table {
    text-align: left;
}
.ctx-lable {
    text-align: left;
}
.profile-edit {
    width: 250px;
    height: 35px;
}
.btn-default {
    background-color: #9BAF5D;
}
</style>