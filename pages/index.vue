<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="pt-3 title">
          献立表 (仮)
        </h1>

        <div>
          日付: {{ $moment().format('YYYY年M月D日') }}
        </div>

        <!-- 今日の献立 -->
        <div class="my-3">
          <h2 class="sticky-top px-3 py-1 section-header">今日の献立</h2>

          <b-card-group v-if="todayMenu !== undefined">
            <b-card title="朝食">
              <p v-for="dish in todayMenu.menus.breakfast.dishes"
                 :key="dish"
                 class="card-text">
                {{ dish }}
              </p>
            </b-card>

            <div class="w-100 d-block d-md-none"></div>

            <b-card title="昼食">
              <p v-for="dish in todayMenu.menus.lunch.dishes"
                 :key="dish"
                 class="card-text">
                {{ dish }}
              </p>
            </b-card>

            <div class="w-100 d-block d-md-none"></div>

            <b-card title="夕食">
              <p v-for="dish in todayMenu.menus.dinner.dishes"
                 :key="dish"
                 class="card-text">
                {{ dish }}
              </p>
            </b-card>
          </b-card-group>

          <div v-else>
            <b-card>
              <h3 class="py-5 text-center">
                まだありません
              </h3>
            </b-card>
          </div>
        </div>

        <!-- 明日の献立 -->
        <div class="my-3">
          <h2 class="sticky-top px-3 py-1 section-header">明日の献立</h2>

          <b-card-group v-if="tomorrowMenu !== undefined">
            <b-card title="朝食">
              <p v-for="dish in tomorrowMenu.menus.breakfast.dishes"
                 :key="dish"
                 class="card-text">
                {{ dish }}
              </p>
            </b-card>

            <div class="w-100 d-block d-md-none"></div>

            <b-card title="昼食">
              <p v-for="dish in tomorrowMenu.menus.lunch.dishes"
                 :key="dish"
                 class="card-text">
                {{ dish }}
              </p>
            </b-card>

            <div class="w-100 d-block d-md-none"></div>

            <b-card title="夕食">
              <p v-for="dish in tomorrowMenu.menus.dinner.dishes"
                 :key="dish"
                 class="card-text">
                {{ dish }}
              </p>
            </b-card>
          </b-card-group>

          <div v-else>
            <b-card>
              <h3 class="py-5 text-center">
                まだありません
              </h3>
            </b-card>
          </div>
        </div>

        <div class="my-3 text-center">
          <b-btn
            class="go-button"
            @click="move()"
            variant="outline-dark"
            block
          >
            <h3 class="align-middle">今月の献立</h3>
          </b-btn>
        </div>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import moment from 'moment'

  export default {
    data () {
      return {
        todayMenu: null,
        tomorrowMenu: null
      }
    },
    methods: {
      move () {
        this.$router.push({ path: '/' + moment(1, 'DD').format('YYYY/MM') })
      }
    },
    created () {
      this.todayMenu = this.$store.state.menus.filter(function (item, index) {
        if (moment(item.date).isSame(moment(), 'day')) return true
      })[0]
      this.tomorrowMenu = this.$store.state.menus.filter(function (item, index) {
        if (moment(item.date).isSame(moment().add(1, 'day'), 'day')) return true
      })[0]
    }
  }
</script>

<style lang="scss" scoped>
  $background-color: #f7f3e8;

  .section-header {
    color: white;
    background-color: grey;
    font-weight: normal;
    border-radius: 4px;
    .wf-mplus1p-n4-active & {
      font-family: 'Mplus 1p', sans-serif;
    }
    & p {
      margin: 0;
    }
  }

  .go-button {
    font-weight: normal;
    & h3 {
      margin: 0;
    }
    .wf-mplus1p-n4-active & {
      font-family: 'Mplus 1p', sans-serif;
    }
  }

  .title {
    word-break: keep-all;
  }
</style>
