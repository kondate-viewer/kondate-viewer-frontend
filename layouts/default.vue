<template>
  <div>
    <nuxt id="contents"/>

    <footer
      v-if="showLicense"
      class="text-center"
      @click="showLicense = false"
    >
      <p class="align-middle">
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
      class="pl-1 mx-0 text-right copyright"
    >
      <p>
        <span @click="showLicense = true">
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
    background-color: #c9c9c9;
    width: 100%;
    &.copyright {
      background-color: inherit;
    }
    & p {
      margin-bottom: 0.1em;
      font-size: 0.6em;
    }
  }
</style>
