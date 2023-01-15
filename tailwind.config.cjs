/** @type {import('tailwindcss').Config} */

module.exports = {
  config: {
    content: [
      'components/**/*.{vue,js,ts}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'composables/**/*.{js,ts}',
      'plugins/**/*.{js,ts}',
      'App.{js,ts,vue}',
      'app.{js,ts,vue}',
      'Error.{js,ts,vue}',
      'error.{js,ts,vue}',
    ],
    theme: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
  },
}
