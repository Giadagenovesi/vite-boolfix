<script>
import {store} from "../store";

export default {
    name: "AppHeader",
    emits: [ "search"],
    data() {
        return {
            store
        }
    },
   
}
</script>

<template>
    <header>
        <div class="container d-flex align-items-center justify-content-between" >
            <h1>BOOLFLIX</h1>
            <div>
                <input type="text" class="rounded" placeholder="Inizia la tua ricerca" v-model.trim="store.searchedTitle">
                <button @click="$emit('search')" class="btn btn-outline-danger ms-2 ">CERCA</button>
            </div>
        </div>   
    </header>
</template>
<style scoped lang="scss">
header {
    background-color: black;
    height: 80px;
    padding: 1rem;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    
    h1 {
        color: #dc3545;
        font-size: 3.5rem;
    }
}
</style>