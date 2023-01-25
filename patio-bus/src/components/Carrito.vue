<template>
    <div class="grid-cont">
        <div  style="background-color: black; width: 100%; height: 100%">
            <div class="imagen-plato">

            </div>
        </div>

        <div>

        </div>
        <h3>LINEA3</h3>
        <h3>LINEA4</h3>

    </div>
</template>


<script>
export default {
    name: 'CarritoVue',
    data: ()=>({
        
    }),

}

</script>


<style scoped>
.grid-cont{
    padding: 50px;
    display: grid;
    place-items: center;
    grid-template-columns: 20% 50% 20% 10%;
    grid-template-rows: 100px;

}
.grid-cont :nth-child(1){
    background-image: url("../assets/ImagenesCards/38031.webp");
    background-size: cover;
    background-position: center;
    grid-column: 1/2;
    grid-row: 1/2;
}
.grid-cont :nth-child(2){
    grid-column: 2/3;
    grid-row: 1/2;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns:  100%;

}
.grid-cont h3:nth-child(3){
    grid-column: 3/4;
    grid-row: 1/2;
}
.grid-cont h3:nth-child(4){
    grid-column: 4/5;
    grid-row: 1/2;
}

</style>