<template>
  <div></div>
</template>

<script>
  import moment from 'moment'

  export default {
    head () {
      return {
        meta: [
          {
            'http-equiv': 'refresh',
            content: '0;URL=' + '/' + moment(1, 'DD').format('YYYY/MM')
          }
        ]
      }
    }
  }
</script>
