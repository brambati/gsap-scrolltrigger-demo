# GSAP ScrollTrigger do Zero

Código do vídeo **"GSAP ScrollTrigger do Zero"** do canal da [Digital Lift](https://digitallift.com.br).

Retângulos em cascata controlados pelo scroll, com **pin**, **scrub**, **stagger**, parallax no hero e texto animado.

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:5173` e role a página.

**Sem instalar nada:** abra o `demo-sem-instalacao.html` direto no navegador (usa o GSAP via CDN).

## Os 4 conceitos

| Propriedade | O que faz |
|---|---|
| `trigger` | Elemento que dispara a animação (`.transicao`) |
| `scrub: 2` | Vincula a animação ao scroll, com 2s de suavização |
| `pin: true` | Trava a seção na tela enquanto a animação acontece |
| `stagger: 0.08` | 80ms de atraso entre cada coluna, criando a cascata |

```js
gsap.to('.retangulos div', {
  y: 0,
  stagger: 0.08,
  ease: 'none',
  scrollTrigger: {
    trigger: '.transicao',
    start: 'top top',
    end: '+=100%',
    scrub: 2,
    pin: true,
    // markers: true, // ative durante o desenvolvimento
  }
});
```

> **Dica:** com `pin: true`, use `start: 'top top'`. Se o pin começar em `'top bottom'`, a seção fica travada fora da tela e a animação acontece sem ninguém ver.

## Arquivos

- `index.html`: estrutura (hero, `.transicao` com 12 divs e seção final)
- `style.css`: layout, estado inicial `translateY(100%)` e as 12 cores
- `main.js`: entrada do hero, parallax, retângulos em cascata e texto
- `demo-sem-instalacao.html`: tudo em um arquivo, com GSAP via CDN

## Stack

[GSAP 3](https://gsap.com) + ScrollTrigger · [Vite](https://vite.dev) · JavaScript puro
