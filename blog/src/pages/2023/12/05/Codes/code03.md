```css
/* O body mudará a cor de fundo
  se o tamanho da tela for entre 400px e 1000px */
@media (min-width: 400) and (max-width: 1000px) {
  body {
    background: red;
  }
}

/* É a mesma coisa que... */

@media (400px <= width <= 1000px) {
  body {
    background: red;
  }
}
```
