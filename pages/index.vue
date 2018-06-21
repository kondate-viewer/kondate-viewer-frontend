<template>
  <b-container>
    <b-row>
      <b-col>
        <div>
          <h1 class="pt-3 title">
            奈良高専 寮食堂 献立表
          </h1>

          <div>
            更新日: {{ $moment(todayMenu.date).format('YYYY年M月D日') }}
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

              <div class="w-100 d-block d-md-none">

              </div>

              <b-card title="昼食">
                <p v-for="dish in todayMenu.menus.lunch.dishes"
                   :key="dish"
                   class="card-text">
                  {{ dish }}
                </p>
              </b-card>

              <div class="w-100 d-block d-md-none">

              </div>

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
              {{ month }}の献立一覧
            </h2>
          </div>

          <div
            v-if="$store.state.viewMonthMenus.length !== 0"
            v-for="menus in $store.state.viewMonthMenus"
            :key="menus.date"
          >
            <div class="sticky-top mt-3">
              <h2
                v-if="$moment(menus.date).isSame(today)"
                class="pt-2 date today"
              >
                <p class="left">
                  {{ $moment(menus.date).format('M月D日') }}
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
                  {{ $moment(menus.date).format('M月D日') }}
                </p>

                <p class="right">
                  {{ $moment(menus.date).from(today) }}
                </p>
              </h2>
            </div>

            <b-card-group>
              <b-card title="朝食" lg="4" colums="12">
                <p v-for="dish in menus.menus.breakfast.dishes"
                   :key="dish"
                   class="card-text">
                  {{ dish }}
                </p>
              </b-card>

              <b-card title="昼食" lg="4" colums="12">
                <p v-for="dish in menus.menus.lunch.dishes"
                   :key="dish"
                   class="card-text">
                  {{ dish }}
                </p>
              </b-card>

              <b-card title="夕食" lg="4" colums="12">
                <p v-for="dish in menus.menus.dinner.dishes"
                   :key="dish"
                   class="card-text">
                  {{ dish }}
                </p>
              </b-card>
            </b-card-group>
          </div>

          <div
            v-if="$store.state.viewMonthMenus.length === 0"
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
              <b-btn
                @click="changeMonth(-1)"
                v-scroll-to="'#menuList'"
              >&lsaquo;</b-btn>
            </b-button-group>

            <b-btn class="mx-2" disabled>
              {{ yearAndMonth }}
            </b-btn>

            <b-button-group class="mx-2">
              <b-btn
                @click="changeMonth(1)"
                v-scroll-to="'#menuList'"
              >&rsaquo;</b-btn>
            </b-button-group>
          </b-button-toolbar>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex'
import moment from 'moment'

export default {
  computed: {
    today () {
      return this.$moment(0, 'HH')
    },
    todayMenu () {
      return this.$store.state.todayMenu
    },
    yearAndMonth () {
      return this.$moment(this.$store.state.viewMonth).format('YYYY年M月')
    },
    month () {
      return this.$moment(this.$store.state.viewMonth).format('M月')
    }
  },
  methods: {
    ...mapMutations([
      'setTodayMenu',
      'setMonth',
      'changeMonth'
    ])
  },
  fetch ({ store }) {
    return new Promise(function (resolve) {
      store.commit('setTodayMenu', moment(0, 'HH'))
      store.commit('setMonth')
      resolve()
    })
  }
}
</script>

<style lang="scss">
@import url('~/assets/css/rounded-mplus-1p.scss');
@import url('https://fonts.googleapis.com/earlyaccess/mplus1p.css');

$background-color: #f7f3e8;

body {
  font-family: 'Rounded Mplus 1p', sans-serif;
  font-size: 1.4rem;
  background-color: $background-color;
  color: #3c3c3c;
}

p {
  word-break: keep-all;
}

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
