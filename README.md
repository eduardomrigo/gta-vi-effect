# GTA VI Logo Reveal Effect

## Resultado
![Preview do Efeito](src/assets/images/preview.gif)

Um efeito de revelação através do logo com animações suaves usando GSAP e Lenis para scroll suave.

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- [GSAP](https://greensock.com/gsap/) - Biblioteca de animações
- [Lenis](https://github.com/studio-freight/lenis) - Scroll suave
- [Vite](https://vitejs.dev/) - Build tool

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone git@github.com:eduardomrigo/gta-vi-effect.git
cd gta-vi-effect
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## 📦 Dependências

Adicione as seguintes dependências ao seu `package.json`:

```json
{
  "dependencies": {
    "gsap": "^3.12.0",
    "lenis": "^1.0.0"
  },
  "devDependencies": {
    "vite": "^4.0.0"
  }
}
```

## 📁 Estrutura do Projeto

```
📁 gta-vi-effect/
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── 📁 images/
│   │   │   ├── 📄 logo.png
│   │   │   ├── 📄 hero-img-layer-1.png
│   │   │   ├── 📄 hero-img-layer-2.png
│   │   │   ├── 📄 gsap.webp
│   │   │   └── 📄 lenis.png
│   │   └── 📁 data/
│   │       └── 📄 logo.js
│   ├── 📁 styles/
│   │   └── 📄 styles.css
│   ├── 📁 scripts/
│   │   └── 📄 script.js
│   └── 📄 index.html
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 README.md
└── 📄 LICENSE
```

## 🎨 Assets Necessários

Para que o efeito funcione corretamente, você precisará dos seguintes assets:

1. **Logo que queira utilizar**
   - `logo.png` - Versão PNG do logo
   - `logo.js` - Arquivo contendo o path do SVG do logo (gerado a partir do SVG)

2. **Imagens de Fundo**
   - `hero-img-layer-1.png` - Imagem de fundo completa
   - `hero-img-layer-2.png` - Imagem de fundo com o objeto principal recortado (para efeito de profundidade)

3. **Logos das Bibliotecas**
   - `gsap.webp` - Logo do GSAP
   - `lenis.png` - Logo do Lenis

## 🎯 Como Funciona

O efeito consiste em:
1. Uma imagem de fundo com o logo que queira utilizar
2. Um efeito de scroll que revela o logo através de uma máscara SVG
3. Animações suaves usando GSAP
4. Scroll suave usando Lenis

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🛠️ Customização

Você pode personalizar:
- Cores através das variáveis CSS em `src/styles/styles.css`
- Tamanhos e espaçamentos nas variáveis CSS
- Animações no arquivo `src/scripts/script.js`
- Breakpoints nas media queries

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Eduardo - [eduardev.com](https://eduardev.com) 
