// ─────────────────────────────────────────────────────────
// main.js — GSAP ScrollTrigger Demo
// Instalar: npm install gsap
// Ou via CDN (sem npm):
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
// ─────────────────────────────────────────────────────────

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// OBRIGATÓRIO — sem isso o ScrollTrigger não funciona
gsap.registerPlugin(ScrollTrigger);

// ══════════════════════════════════════════════════════
// 1. ENTRADA DO HERO
//    Roda uma vez ao carregar. Sem ScrollTrigger.
// ══════════════════════════════════════════════════════
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTl
  .to('.hero-label', { opacity: 1, y: 0, duration: 1,   delay: 0.3 })
  .to('.hero h1',    { opacity: 1, y: 0, duration: 1.2 }, '-=0.6')
  .to('.hero-sub',   { opacity: 1, y: 0, duration: 0.8 }, '-=0.8')
  .to('.scroll-hint',{ opacity: 1,       duration: 0.8 }, '-=0.4');

// ══════════════════════════════════════════════════════
// 2. PARALLAX NO HERO
//    O fundo se move mais devagar que o scroll
// ══════════════════════════════════════════════════════
gsap.to('.hero-bg', {
  yPercent: -15,                   // move 15% para cima

  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',              // começa quando hero está no topo
    end: 'bottom top',             // termina quando hero sai pela parte de cima
    scrub: 1.5,                    // suavização de 1.5s
  }
});

// ══════════════════════════════════════════════════════
// 3. RETÂNGULOS — EFEITO PRINCIPAL
//    Cada coluna sobe em cascata conforme o scroll
// ══════════════════════════════════════════════════════
gsap.to('.retangulos div', {
  y: 0,           // de translateY(100%) → y:0
  stagger: 0.08,  // 80ms de delay entre cada coluna = cascata
  ease: 'none',   // sem easing — o scrub já cuida da suavidade

  scrollTrigger: {
    trigger: '.transicao',
    start: 'top top',        // começa: topo de .transicao chega ao topo da tela (o pin trava aqui)
    end: '+=100%',           // dura o equivalente a uma tela inteira de scroll
    scrub: 2,                // vincula ao scroll com suavização de 2s
    pin: true,               // TRAVA .transicao enquanto a animação acontece
    // markers: true,        // ← ATIVE ISSO durante o desenvolvimento!
  }
});

// ══════════════════════════════════════════════════════
// 4. TEXTO SOBRE OS RETÂNGULOS
//    Aparece depois que os retângulos cobrem a seção
// ══════════════════════════════════════════════════════
gsap.to('.transicao-texto', {
  opacity: 1,

  scrollTrigger: {
    trigger: '.transicao',
    start: 'center center',  // começa quando .transicao está no meio da tela
    end: 'bottom top',
    scrub: 1,
  }
});