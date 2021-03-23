<template>
    <div>
       <div class="row">
           <div class="card-image" >
             <img :src="getProfileUsers.avatar_url">
           </div>
       </div> 
    </div>
</template>


<script>
export default {
    computed: {
        getProfileUsers () {
            return this.$store.getters.getProfileUsers;
        },
    },
}
</script>

<style lang="scss" scoped>

</style>