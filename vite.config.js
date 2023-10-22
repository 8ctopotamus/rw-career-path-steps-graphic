import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path'
import rwJSON from './src/data/rw.json'

const pageData = {
  '/index.html': rwJSON,
};

export default {
  plugins: [
    handlebars({
      context(pagePath) {
        return pageData[pagePath];
      },
      partialDirectory: resolve(__dirname, 'src', 'partials'),
    }),
  ],
};