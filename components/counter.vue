<template>
  <div class="container-fluid number_of_projects">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-3 done_projects">
          <h2><animated-number
            :value="value1"
            :formatValue="formatToPrice"
            :duration="duration"
            :delay="delay"
          /></h2>
          <h6>{{$t("succed_projects")}}</h6>
        </div>
        <div class="col-3 done_projects">
          <h2><animated-number
            :value="value2"
            :formatValue="formatToPrice"
            :duration="duration"
            :delay="delay"
          /></h2>

          <h6>{{$t("clients")}}</h6>
        </div>
        <div class="col-3 done_projects">
          <h2><animated-number
            :value="value3"
            :formatValue="formatToPrice"
            :duration="duration"
            :delay="delay"
          /></h2>

          <h6>{{$t("logo_and_branding")}}</h6>
        </div>
        <div class="col-3 done_projects">
          <h2><animated-number
            :value="value4"
            :formatValue="formatToPrice"
            :duration="duration"
            :delay="delay"
          /></h2>

          <h6>{{$t("sites")}}</h6>
        </div>
      </div>
      <div class="col-12">
        <div class="d-flex flex-column align-items-center">
          <h6>{{$t("we_do_unique_tasks")}}</h6>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";


export default {
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      value1: 201,
      duration: 2000,
      value2: 42,
      duration: 3000,
      value3: 10,
      duration: 6000,
      value4: 24,
      duration: 4000,
      delay:3000
    };
  },
  methods: {
    formatToPrice(value) {
      return `<h2> ${Number(value).toFixed(0)}</h1>`;
    },
  },
};
</script>

<style>
* {
  font-family: "Montserrat";
}

.done_projects {
  text-align: center;
}
</style>
