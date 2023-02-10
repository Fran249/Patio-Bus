<template>
    <div>
 <v-row>
    <v-col cols="12">
        <v-container>
            <input type="text" placeholder="Nombre" v-model="nombre" class="nombre-descripcion"> 
            <input type="text" placeholder="Nombre" v-model="nombre" class="nombre-descripcion">
            <div class="d-flex flex-row justify-space-between">
                <select class="categ-id-stock-precio">
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                </select>
                <select class="categ-id-stock-precio">
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                </select>
                <select class="categ-id-stock-precio">
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                </select>
                <select class="categ-id-stock-precio">
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                </select>
            </div>
            <div class="d-flex flex-row justify-space-between">
                <select class="categ-id-stock-precio">
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                </select>
                <select class="categ-id-stock-precio">
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                </select>
                <select class="categ-id-stock-precio">
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                </select>
                <select class="categ-id-stock-precio">
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                </select>
            </div>
            <div class="d-flex flex-row justify-space-between">
                <select class="categ-id-stock-precio">
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                    <option value="">opcion1</option>
                </select>
            </div>

        </v-container>
    </v-col>

    <v-col cols="3"> 

    </v-col>
 </v-row>
    </div>
 
 
 </template>
 
 
 <script>
 export default{
 name: 'FormAdminComp',
 data: ()=>({
 
 })
 }
 
 </script>
 <style lang="scss" scoped>


 .nombre-descripcion{
    width: 100%;
    border: 1px solid black;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
 }
 .categ-id-stock-precio{
    width: 24%;

    border: 1px solid black;
    border-bottom: 2px solid black;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
 }
 option {
    font-family: 'red-hat';
    color: #B3B6BC;
 }
 select {
    font-family: 'red-hat';
    color: #B3B6BC;
 }
</style>