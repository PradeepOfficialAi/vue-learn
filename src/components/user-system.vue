<template>
    <div>
        <h1 v-if="isUser">
            Hello User How are you??? {{ welcome }}
        </h1>
    </div>
</template>

<script>
import {  mapActions } from "vuex";
export default {
    data() {
        return{
            welcome: "Great Welcome to you love lot buddy to choose nodejs"
        }
    },
    computed: {
        ...mapActions('UserSystem', ['isUser'])
    }
}
</script>