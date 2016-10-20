import Vue from 'vue';
import plugin from '../../src/vue-social-sharing';

// import all helpers
const helpersContext = require.context('../helpers', true);
helpersContext.keys().forEach(helpersContext);

// require all test files
const testsContext = require.context('./', true);
testsContext.keys().forEach(testsContext);

Vue.use(plugin);
