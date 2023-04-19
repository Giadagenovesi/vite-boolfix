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
    <h1>Boolflix</h1>
    <input type="text" v-model.trim="store.searchedTitle">
    <button @click="$emit('search')" >cerca</button>
    
</template>