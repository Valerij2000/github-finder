<template>
    <div>
       <section class="finder-section">
           <div class="container">
               <div class="row">

                   <h5 v-if="error" class="text-center">{{errorMes}}</h5>
                
                       <Search  
                :value="search"
                placeholder="Type username GitHubPages..."
                @search="search = $event"
                   />
               
                
               </div>

               <div class="row">
                    <div class="col-xl-6 offset-xl-3">
                    <button class="btn w-100" @click="getRepos()">sending</button>
                </div>
               </div>


                <Repos/>

                
           </div>
       </section>
    </div>
</template>


<script>

import Search from '@/components/Search.vue'
import Repos from '@/components/Repos.vue'

import axios from 'axios'   

export default {
   components: {
       Search, Repos
   },

    data() {
        return {
            search: '',
            error: null,
            errorMes: '',
        }
    },

   

    methods: {

       
           
     


        getUsersProfile () {

        axios
            .get(`https://api.github.com/users/${this.search}`)
                .then((response) => {
                    this.$store.dispatch('setProfileUsers', response.data);
                    console.log(response);
                })
        },



        getRepos () {
            // https://api.github.com/users/Valerij2000/repos

            this.getUsersProfile();

            axios
            .get(`https://api.github.com/users/${this.search}/repos`)
                .then((response) => {

                    this.$store.dispatch('setRepos', response.data);
                    console.log(response);
                    this.error = false;
                })
                    .catch((error) => {
                        console.log(error);
                        this.error = true;
                        this.errorMes = "Can't found repositories!";
                    })

            console.log(`get user - ${this.search} repos`)
        },
    },


}
</script>

<style lang="scss">

    .finder-section {
        min-height: 413px;

    h5 {
        color: red;
    }

    }

    


</style>