# Personal portfolio - 2021 verison

![image](https://user-images.githubusercontent.com/86482525/134183976-a4f694b8-920a-48e2-8a31-3ac9ec15dbb8.png)

## Getting Started with Create React App ⚛

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents✒️

- [Overview](#overview)🎯
  - [Links](#links)🔗
- [My process](#my-process)🧩
  - [Built with](#built-with)🔨
  - [What I learned](#what-i-learned)📝
  - [Useful resources](#useful-resources)
- [Author](#author)🙋🏻

## Overview🎯

### Links🔗

- Live Site URL: [Portfolio](https://portifolio-2021-ecru.vercel.app/)

## My process🧩

### Built with🔨

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript(React.js)
- Create React App
- SASS

### What I learned📝

- Use <strong>React props</strong>:
```js
const Projeto = ({textSpan, urlImg, urlDemo, urlRepo, imgAlt}) ...
```
- Use an <strong>arrow function</strong>. In this case i wanted to add the class "active" to the element with "nav" id.
```js
let toggleMenu = () => {
  const nav = document.getElementById("nav");
  return nav.classList.toggle("active");
}
```
- Use <strong>React Router DOM</strong> to acess differents pages.
```js
<Switch>
  <Route path="/" exact>
    <TelaHome />
  </Route>
  <Route path="/contato">
    <ContatoTela />
  </Route>
  <Route path="/formacao">
    <FormacaoTela />
  </Route>
  <Route path="/projetos">
    <ProjetosTela />
  </Route>
</Switch>
```
### Useful resources

- [Mobile menu](https://www.youtube.com/watch?v=DnODupiIAiE) - This helped me understand how to create a menu for mobile devices. I'd recommend it to anyone who wants to understand this.
- [Icons](https://freeicons.io/) - All icons of the portfolio are from Free Icons.

## Author🙋🏻

- Website - [Álvaro J.](https://www.github.com/alvaro-j/)
