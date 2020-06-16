## [React](https://github.com/facebook/react)

React is a JavaScript library for building user interfaces.

- Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
- Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
- Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

## [Redux](https://github.com/reduxjs/redux)

Redux is a predictable state container for JavaScript apps.
(Not to be confused with a WordPress framework – Redux Framework.)

- It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

- You can use Redux together with React, or with any other view library.
- It is tiny (2kB, including dependencies).

## [Redux Saga](https://github.com/redux-saga/redux-saga)

redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects. redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal redux actions, it has access to the full redux application state and it can dispatch redux actions as well.

It uses an ES6 feature called Generators to make those asynchronous flows easy to read, write and test. By doing so, these asynchronous flows look like your standard synchronous JavaScript code. (kind of like async/await, but generators have a few more awesome features we need)

You might've used redux-thunk before to handle your data fetching. Contrary to redux thunk, you don't end up in callback hell, you can test your asynchronous flows easily and your actions stay pure.

## [Next.js](https://github.com/zeit/next.js/)

Next.js is a minimalistic framework for server-rendered React applications. It provides code-splitting and therefore lazy-loading out of the box. It internally takes care of a lot of boilerplate including state transfer and developing react components without the need to take care of rendering environment.