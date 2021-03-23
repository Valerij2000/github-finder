<template>
  <div>
    <section class="repos-section mt-5">
      <div class="row">
        <div class="col s12 m7" v-for="(repo, index) in getReposData" :key="index" >
          
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
          <Profile />
        <div class="card-content white-text">
          <span class="card-title">{{repo.name}}</span>
          <p>{{repo.description}}</p>
        </div>
        <div class="card-action">
          <a :href="repo.html_url" :target="repo.html_url">URL</a>
          <span class="stars"> {{getStars[repo.stargazers_count]}} </span>
        </div>
      </div>
    </div>
  </div>

        </div>
      </div>
    </section>
  </div>
</template>


<script>

import Profile from '@/components/Profile.vue'


export default {

    components: {
        Profile
    },




    data() {
        return {
            
        }
    },


   
    computed: {
        getStars () {
          return this.$store.getters.getStars;
        },
          getReposData () {
            return this.$store.getters.getRepos;
        },
    },


};
</script>


<style lang="scss" scoped>
    a {
        &:hover {
            cursor: pointer;
        }
    }

    .stars {
        color: chartreuse;
    }

</style>