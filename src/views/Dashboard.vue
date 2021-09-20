<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-sm border">
                <img class="img-fluid" src="../assets/dashboard-welcome.png"/>
            </div>
            <div class="col-sm">
                <div class="row border align-self-center">
                    <div class="text-center fs-3">Hello, dddddd</div>
                    <div class="text-center fs-4">user information:</div>
                    <div class="text-center fs-4">User name: </div>
                    <div class="text-center fs-4">Login time: </div>
                </div>
                <div class="row mt-5">
                    <table class="table fs-4 text-center table-bordered border-white table-color">
                        <tr>
                            <td class="dashboard-btn py-4">Publish Program</td>
                            <td class="dashboard-btn py-4">Manage Program</td>
                        </tr>
                        <tr>
                            <td class="dashboard-btn py-4">Manage Experience</td>
                            <td class="dashboard-btn py-4">Config Account</td>
                        </tr>
                        <tr>
                            <td class="dashboard-btn py-4">Share new Experience</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.table-color{
    background-color: #547560;
    color: white;
}
.dashboard-btn{
    font-family: sans-serif;
}
.dashboard-btn:hover{
    background-color: black;
    color: white;
}
</style>