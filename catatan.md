### Opsi Hero Section Pertama

```css
.hero {
  background-image: url("../public/images/heros/hero-image_4.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  color: var(--light);
}

.hero-inner {
  display: grid;
  place-items: center;
  padding: 100px 20px;

  background: linear-gradient(
    to bottom,
    rgba(57, 62, 70, 0.5),
    rgba(0, 173, 181, 0.5)
  );
  background-blend-mode: multiply;
}

.hero-inner h1 {
  font-size: 3em;
  filter: drop-shadow(2px 6px 10px rgba(41, 18, 18, 0.8));
}
```
