<template>
  <b-container>
    <b-row>
      <b-col>
        <div>
          <h1 class="pt-3 title">
            奈良高専 寮食堂 献立表
          </h1>

          <div>
            日付: {{ $moment().format('YYYY年M月D日') }}
          </div>

          <!-- 今日の献立 -->
          <div class="mt-3">
            <h2 class="sticky-top px-3 py-1 section-header">今日の献立</h2>

            <b-card-group>
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
          </div>

          <!-- 献立一覧 -->
          <div class="mt-3">
            <h2 id="menuList" class="px-3 py-1 section-header">
              {{ month.format('M月') }}の献立一覧
            </h2>
          </div>

          <div
            v-if="menus.length !== 0"
            v-for="menu in menus"
            :key="menu.date"
          >
            <div class="sticky-top mt-3">
              <h2
                v-if="$moment(menu.date).isSame($moment(), 'day')"
                class="pt-2 date today"
              >
                <p class="left">
                  {{ $moment(menu.date).format('M月D日') }}
                </p>

                <p class="right">
                  今日
                </p>
              </h2>

              <h2
                v-else
                class="pt-2 date"
              >
                <p class="left">
                  {{ $moment(menu.date).format('M月D日') }}
                </p>

                <p class="right">
                  {{ $moment(menu.date).from($moment(0, 'HH')) }}
                </p>
              </h2>
            </div>

            <b-card-group>
              <b-card title="朝食" lg="4" colums="12">
                <p v-for="dish in menu.menus.breakfast.dishes"
                   :key="dish"
                   class="card-text">
                  {{ dish }}
                </p>
              </b-card>

              <b-card title="昼食" lg="4" colums="12">
                <p v-for="dish in menu.menus.lunch.dishes"
                   :key="dish"
                   class="card-text">
                  {{ dish }}
                </p>
              </b-card>

              <b-card title="夕食" lg="4" colums="12">
                <p v-for="dish in menu.menus.dinner.dishes"
                   :key="dish"
                   class="card-text">
                  {{ dish }}
                </p>
              </b-card>
            </b-card-group>
          </div>

          <div
            v-if="menus.length === 0"
            class="my-3"
          >
            <h3 class="text-center">
              まだありません
            </h3>
          </div>

          <b-button-toolbar
            key-nav
            class="my-3 justify-content-center"
          >
            <b-button-group class="mx-2">
              <b-btn @click="move(-1)">&lsaquo;</b-btn>
            </b-button-group>

            <b-button-group class="mx-2">
              <b-btn
                v-if="$moment(1, 'DD').isBefore(month)"
                @click="move()"
              >
                &lsaquo; 今月
              </b-btn>
              <b-btn disabled>{{ month.format('YY年M月') }}</b-btn>
              <b-btn
                v-if="$moment(1, 'DD').isAfter(month)"
                @click="move()"
              >
                今月 &rsaquo;
              </b-btn>
            </b-button-group>

            <b-button-group class="mx-2">
              <b-btn @click="move(1)">&rsaquo;</b-btn>
            </b-button-group>
          </b-button-toolbar>
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
        menus: [],
        month: null,
        todayMenu: null
      }
    },
    methods: {
      move (delta) {
        let path = delta === undefined
          ? '/' + moment(1, 'DD').format('YYYY/MM')
          : '/' + moment(this.month).add(delta, 'month').format('YYYY/MM')

        this.$router.push({ path })
      }
    },
    validate ({ params }) {
      // 2000年から2999年まで
      // 01月から12月 または 1月から12月
      return /^2\d{3}$/.test(params.year) && /^(0?[1-9]|1[0-2])$/.test(params.month)
    },
    created () {
      let month = moment(this.$route.params.year + '-' + this.$route.params.month)
      this.month = month

      this.menus = this.$store.state.menus.filter(function (item, index) {
        if (moment(item.date).isSame(month, 'month')) return true
      })
      this.todayMenu = this.$store.state.menus.filter(function (item, index) {
        if (moment(item.date).isSame(moment(), 'day')) return true
      })[0]
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/earlyaccess/mplus1p.css');

  $background-color: #f7f3e8;

  .section-header {
    color: white;
    background-color: grey;
    font-family: 'Mplus 1p', sans-serif;
    font-weight: normal;
    border-radius: 4px;
    & p {
      margin: 0;
    }
  }

  .date {
    border-bottom: 2px solid grey;
    background-color: $background-color;
    &.today {
      border-bottom-color: #ff5511;
    }
  }

  @media screen and (min-width: 576px) {
    .card-group .card {
      margin-bottom: 15px;
    }
  }

  .left {
    text-align: left;
    float: left;
  }

  .right {
    text-align: right;
  }

  .title {
    word-break: keep-all;
  }
</style>
