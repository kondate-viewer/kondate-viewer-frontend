<template>
  <div>
    <nuxt id="contents"/>

    <footer
      v-if="showLicense"
      class="text-center"
      @click="showLicense = false"
    >
      <p class="align-middle">
        This project is licensed under the
        <a href="https://github.com/kondate-viewer/kondate-viewer-frontend/blob/master/LICENSE">
          MIT License</a><!--
          -->.
      </p>
    </footer>

    <footer
      v-else
      class="pl-1 mx-0 text-left copyright"
    >
      <p>
        <span @click="showLicense = true">&copy;</span>
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
  @import url('https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css');

  $background-color: #f7f3e8;
  $footer-height: 1em;

  html {
    min-height: 100%;
    position: relative;
  }

  body {
    font-family: 'Rounded Mplus 1c', sans-serif;
    font-size: 1.4rem;
    background-color: $background-color;
    color: #3c3c3c;
    margin-bottom: $footer-height;
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
