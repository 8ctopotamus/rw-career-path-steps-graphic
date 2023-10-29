import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'
import { helpers } from './src/utils/helpers'
import rwJSON from './src/data/rw.json'
import insuranceJSON from './src/data/insurance.json'

const pageData = {
  '/index.html': {
    advisorSteps: rwJSON,
    insuranceSteps: insuranceJSON,
  },
};

export default {
  plugins: [
    handlebars({
      context(pagePath) {
        return pageData[pagePath];
      },
      partialDirectory: resolve(__dirname, 'src', 'partials'),
      helpers,
    }),
  ],
};