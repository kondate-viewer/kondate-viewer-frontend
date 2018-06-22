<template>
  <div id="wrapper">
    <header>
      <p>
        This project is licensed under the
        <a href="https://github.com/kondate-viewer/kondate-viewer-frontend/blob/master/LICENSE">
          MIT License</a><!--
          -->.
      </p>
    </header>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  @import url('~/assets/css/rounded-mplus-1p.scss');

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

  header {
    background-color: #c9c9c9;
    width: 100%;
    text-align: center;
    & p {
      margin-bottom: 0.1em;
      font-size: 0.6em;
    }
  }
</style>
