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
    <div class="container">
        <h1>Boolflix</h1>
        <input type="text" v-model.trim="store.searchedTitle">
        <button @click="$emit('search')" >cerca</button>
    </div>
    
    
</template>