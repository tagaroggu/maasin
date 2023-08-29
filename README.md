# maasin
A very experimental small JavaScript HTML library

Maasin is very simple. Maasin requires creating Nodes manually. This is very cursed. This also allows the element function to be almost like a JSX function, but it is not completely the same. The element function takes two arguments, the tag name, and a spread argument of Nodes. The spread argument can be nested arrays that will be flattened before iteration. An example:
```js
e('div', [[a('href', 'https://example.com')]], [e('h1', t('Hello, '), t('World!'))])
```
Elements can be created with `element` or `e`, attributes can be created with `attribute` or `a`, text can be created with `text`, `t`, or a plain string, document fragments can be created with `fragment` or `f`, 