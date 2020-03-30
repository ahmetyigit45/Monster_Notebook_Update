<template>
    <v-content>
      <homepage/>
    </v-content>
</template>

<script>
import homepage from './views/Home';

export default {
  name: 'App',

  components: {
    homepage,
  },

  data: () => ({
    //
  }),
};
</script>
