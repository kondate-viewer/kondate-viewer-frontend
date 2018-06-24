<template>
  <div id="contents">
    <nuxt/>

    <footer
      v-if="showLicense"
      class="text-center"
      @click="toggleLicense()"
    >
      <p class="px-1 my-0 align-middle">
        このプロジェクトは
        <a href="https://github.com/kondate-viewer/kondate-viewer-frontend/blob/master/LICENSE">
          MIT License
        </a>
        が適用されます.

        例外として, アイコンに一部
        <a href="https://fontawesome.com/">
          Font Awesome
        </a>
        の著作物を利用しています.
        Font Awesome の著作物には
        <a href="https://creativecommons.org/licenses/by/4.0/deed.ja">
          CC BY 4.0
        </a>
        が適用されます.
      </p>
    </footer>

    <footer
      v-else
      class="text-right copyright"
    >
      <p class="px-1 my-0">
        <span @click="toggleLicense()">
          ライセンスについて
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showLicense: false
      }
    },
    methods: {
      toggleLicense() {
        this.showLicense = !this.showLicense
      }
    }
  }
</script>

<style lang="scss">
  $background-color: #f7f3e8;
  $footer-height: 1em;

  html {
    min-height: 100%;
    position: relative;
  }

  body {
    font-size: 1.4rem;
    background-color: $background-color;
    color: #3c3c3c;
    margin-bottom: $footer-height;
    .wf-roundedmplus1c-n4-active & {
      font-family: 'Rounded Mplus 1c', sans-serif;
    }
  }

  p {
    word-break: keep-all;
  }

  footer {
    position: absolute;
    bottom: 0;
    height: $footer-height;
    width: 100%;
    &.copyright {
      background-color: inherit;
      & p {
        background-color: inherit;
      }
    }
    & p {
      background-color: #c9c9c9;
      margin-bottom: 0.1em;
      font-size: 0.6em;
    }
  }
</style>
