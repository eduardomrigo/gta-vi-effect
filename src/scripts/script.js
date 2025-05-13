import { logoData } from "../assets/data/logo";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Os comentários abaixo foram feitos por mim, e nao pelo chatgpt kkk

// Registra o plugin ScrollTrigger do GSAP
gsap.registerPlugin(ScrollTrigger);

// Configuração inicial do scroll suave com o Lenis
function setupSmoothScroll() {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    return lenis;
}

function setupInitialElements() {
    const isMobile = window.innerWidth <= 768;
    const initialOverlayScale = isMobile ? 3000 : 750;

    // Seleção dos elementos
    const elements = {
        heroImgContainer: document.querySelector(".hero-img-container"),
        heroImgLogo: document.querySelector(".hero-img-logo"),
        heroImgCopy: document.querySelector(".hero-img-copy"),
        fadeOverlay: document.querySelector(".fade-overlay"),
        svgOverlay: document.querySelector(".overlay"),
        overlayCopy: document.querySelector("h1"),
        libraryItems: document.querySelectorAll(".library-item"),
        logoContainer: document.querySelector(".logo-container"),
        logoMask: document.getElementById("logoMask")
    };

    gsap.set(elements.heroImgContainer, {
        scale: isMobile ? 2.2 : 1.5
    });
    gsap.set(elements.svgOverlay, {
        scale: initialOverlayScale
    });
    gsap.set([elements.heroImgLogo, elements.heroImgCopy], {
        opacity: 1
    });
    gsap.set(elements.fadeOverlay, {
        opacity: 0
    });
    gsap.set(elements.overlayCopy, {
        opacity: 0,
        scale: 1.25
    });
    gsap.set(elements.libraryItems, {
        scale: 0.8,
        opacity: 0
    });

    return { elements, initialOverlayScale, isMobile };
}

// Configuração do logo e máscara
function setupLogoMask(elements) {
    elements.logoMask.setAttribute("d", logoData);

    const logoDimensions = elements.logoContainer.getBoundingClientRect();
    const logoBoundingBox = elements.logoMask.getBBox();

    const horizontalScaleRatio = logoDimensions.width / logoBoundingBox.width;
    const verticalScaleRatio = logoDimensions.height / logoBoundingBox.height;
    const logoScaleFactor = Math.min(horizontalScaleRatio, verticalScaleRatio);

    const logoHorizontalPosition = logoDimensions.left + (logoDimensions.width - logoBoundingBox.width * logoScaleFactor) / 2 - logoBoundingBox.x * logoScaleFactor;
    const logoVerticalPosition = logoDimensions.top + (logoDimensions.height - logoBoundingBox.height * logoScaleFactor) / 2 - logoBoundingBox.y * logoScaleFactor;

    // Ajuste baseado no tamanho da tela
    let logoScaleMultiplier = 1;
    if (window.innerWidth <= 480) {
        logoScaleMultiplier = 1.5;
    } else if (window.innerWidth <= 1024) {
        logoScaleMultiplier = 1;
    }

    elements.logoMask.setAttribute(
        "transform",
        `translate(${logoHorizontalPosition}, ${logoVerticalPosition}) scale(${logoScaleFactor * logoScaleMultiplier})`
    );
}


function setupScrollAnimations(elements, initialOverlayScale, isMobile) {
    ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        end: `${window.innerHeight * (isMobile ? 4 : 2)}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
            const scrollProgress = self.progress;

            // Animação do logo e texto inicial
            const fadeOpacity = 1 - scrollProgress * (1 / 0.15);
            if (scrollProgress <= 0.15) {
                gsap.set([elements.heroImgLogo, elements.heroImgCopy], {
                    opacity: fadeOpacity,
                });
            } else {
                gsap.set([elements.heroImgLogo, elements.heroImgCopy], {
                    opacity: 0,
                });
            }

            // Animação do container e overlay
            if (scrollProgress <= 0.85) {
                const normalizedProgress = scrollProgress * (1 / 0.85);
                const heroImgContainerScale = 1.5 - 0.5 * normalizedProgress;
                const overlayScale = initialOverlayScale * Math.pow(1 / initialOverlayScale, normalizedProgress);

                gsap.set(elements.heroImgContainer, {
                    scale: heroImgContainerScale,
                });

                gsap.set(elements.svgOverlay, {
                    scale: overlayScale,
                });
            }

            // Animação do fade overlay
            if (scrollProgress >= 0.25) {
                const fadeOverlayOpacity = Math.min(1, (scrollProgress - 0.25) * (1 / 0.4));
                gsap.set(elements.fadeOverlay, {
                    opacity: fadeOverlayOpacity,
                });
            }

            // Animação do texto e bibliotecas
            if (scrollProgress >= 0.6 && scrollProgress <= 0.85) {
                const overlayCopyRevealProgress = (scrollProgress - 0.6) * (1 / 0.25);
                const gradientSpread = 100;
                const gradientBottomPosition = 240 - overlayCopyRevealProgress * 280;
                const gradientTopPosition = gradientBottomPosition - gradientSpread;
                const overlayCopyScale = 1.25 - 0.25 * overlayCopyRevealProgress;

                const gradientStyle = `linear-gradient(to bottom, #111117 ${gradientTopPosition}%, #ffffff ${gradientBottomPosition}%, #ffffff 100%)`;
                elements.overlayCopy.style.background = gradientStyle;
                elements.overlayCopy.style.webkitBackgroundClip = 'text';
                elements.overlayCopy.style.backgroundClip = 'text';
                elements.overlayCopy.style.color = 'transparent';

                // Animação das bibliotecas
                elements.libraryItems.forEach((item, index) => {
                    const delay = index * 0.2;
                    const itemProgress = Math.max(0, overlayCopyRevealProgress - delay);
                    gsap.set(item, {
                        opacity: itemProgress,
                        scale: 0.8 + (itemProgress * 0.2)
                    });
                });

                gsap.set(elements.overlayCopy, {
                    scale: overlayCopyScale,
                    opacity: overlayCopyRevealProgress,
                });
            } else if (scrollProgress < 0.6) {
                gsap.set([elements.overlayCopy, ...elements.libraryItems], {
                    opacity: 0,
                    scale: 0.8
                });
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    try {
        setupSmoothScroll();
        const { elements, initialOverlayScale, isMobile } = setupInitialElements();
        setupLogoMask(elements);
        setupScrollAnimations(elements, initialOverlayScale, isMobile);
    } catch (error) {
        console.error("Erro ao inicializar a aplicação:", error);
    }
});
