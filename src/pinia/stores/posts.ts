import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [
      {
        id: 1,
        userName: 'Alex',
        age: 20,
        description:
          'Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance s data. All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.',
        image: 'https://cdn.tripster.ru/thumbs2/4073fe44-549d-11ed-9d0b-8671fed585d2.1220x600.jpeg',
      },
      {
        id: 2,
        userName: 'Kate',
        age: 20,
        description:
          'Under the hood, Vue compiles the templates into highly-optimized JavaScript code. Combined with the reactivity system, Vue can intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.',
        image: 'https://cdn.tripster.ru/thumbs2/4073fe44-549d-11ed-9d0b-8671fed585d2.1220x600.jpeg',
      },
      {
        id: 3,
        userName: 'Sam',
        age: 20,
        description:
          'If you are familiar with Virtual DOM concepts and prefer the raw power of JavaScript, you can also directly write render functions instead of templates, with optional JSX support. However, do note that they do not enjoy the same level of compile-time optimizations as templates.',
        image: 'https://cdn.tripster.ru/thumbs2/4073fe44-549d-11ed-9d0b-8671fed585d2.1220x600.jpeg',
      },
      {
        id: 4,
        userName: 'Jhon',
        age: 20,
        description:
          'The contents of the span will be replaced with the value of the rawHtml property, interpreted as plain HTML - data bindings are ignored. Note that you cannot use v-html to compose template partials, because Vue is not a string-based templating engine. Instead, components are preferred as the fundamental unit for UI reuse and composition.',
        image: 'https://cdn.tripster.ru/thumbs2/4073fe44-549d-11ed-9d0b-8671fed585d2.1220x600.jpeg',
      },
      {
        id: 5,
        userName: 'Jhon',
        age: 20,
        description:
          'The contents of the span will be replaced with the value of the rawHtml property, interpreted as plain HTML - data bindings are ignored. Note that you cannot use v-html to compose template partials, because Vue is not a string-based templating engine. Instead, components are preferred as the fundamental unit for UI reuse and composition.',
        image: 'https://cdn.tripster.ru/thumbs2/4073fe44-549d-11ed-9d0b-8671fed585d2.1220x600.jpeg',
      },
      {
        id: 6,
        userName: 'Jhon',
        age: 20,
        description:
          'The contents of the span will be replaced with the value of the rawHtml property, interpreted as plain HTML - data bindings are ignored. Note that you cannot use v-html to compose template partials, because Vue is not a string-based templating engine. Instead, components are preferred as the fundamental unit for UI reuse and composition.',
        image: 'https://cdn.tripster.ru/thumbs2/4073fe44-549d-11ed-9d0b-8671fed585d2.1220x600.jpeg',
      },
      {
        id: 7,
        userName: 'Jhon',
        age: 20,
        description:
          'The contents of the span will be replaced with the value of the rawHtml property, interpreted as plain HTML - data bindings are ignored. Note that you cannot use v-html to compose template partials, because Vue is not a string-based templating engine. Instead, components are preferred as the fundamental unit for UI reuse and composition.',
        image: 'https://cdn.tripster.ru/thumbs2/4073fe44-549d-11ed-9d0b-8671fed585d2.1220x600.jpeg',
      },
      {
        id: 8,
        userName: 'Jhon',
        age: 20,
        description:
          'The contents of the span will be replaced with the value of the rawHtml property, interpreted as plain HTML - data bindings are ignored. Note that you cannot use v-html to compose template partials, because Vue is not a string-based templating engine. Instead, components are preferred as the fundamental unit for UI reuse and composition.',
        image: 'https://cdn.tripster.ru/thumbs2/4073fe44-549d-11ed-9d0b-8671fed585d2.1220x600.jpeg',
      },
    ],
  }),
})
