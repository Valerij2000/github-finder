<template>
  <div>
    <section class="search-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 offset-xl-2">
            <div class="wrapper__search">
              <!-- Search -->
              <div class="search">
                
              </div>
              <!-- Search input -->
              <input type="text" :placeholder="placeholder" v-model="search" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Search",
    },
  },
  data() {
    return { search: this.value };
  },
  watch: {
    search(val) {
      console.log(val)
      this.$emit("search", val);
    },
  },
};
</script>

<style scoped lang="scss">

</style>

le>


