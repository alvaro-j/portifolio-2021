# Personal portfolio - 2021 verison

![image](https://user-images.githubusercontent.com/86482525/157653388-c4507631-8d00-484e-b146-3cef1d03db95.png)

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

- Live Site URL: [Portfolio](https://alvaro-j-ecru.vercel.app/)

## My process🧩

### Built with🔨

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- React.js, Hooks
- Create React App
- SASS
- Material UI
- i18n(internationalization-framework)

### What I learned📝

- Use <strong>Material UI</strong> library.
```js
<CardActions>
	<Button target="_blank" href={urlDemo} variant="contained" size="small" color="primary">
		Demo
	</Button>
	<Button target="_blank" href={urlRepo} variant="contained" size="small" color="primary">
		Repo
	</Button>
</CardActions>
```
- Use <strong>React Hooks</strong>. In this case i wanted to change the page title:
```js
const [pageTitle, setPageTitle] = React.useState(document.title);

	React.useEffect(() => {
		document.title = pageTitle;
	});
```
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
- Use <strong>SASS</strong> in a React project.
```js
import "./styles/global.scss";
```
### Useful resources

- [Mobile menu](https://www.youtube.com/watch?v=DnODupiIAiE) - This helped me understand how to create a menu for mobile devices. I'd recommend it to anyone who wants to understand this.
- [Icons](https://freeicons.io/) - All icons of the portfolio are from Free Icons.

## Author🙋🏻

- Website - [Álvaro J.](https://www.github.com/alvaro-j/)
