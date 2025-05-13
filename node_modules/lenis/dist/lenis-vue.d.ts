import * as Lenis from 'lenis';
import Lenis__default, { ScrollCallback } from 'lenis';
import * as vue from 'vue';
import { PropType, HTMLAttributes, Plugin } from 'vue';

declare const VueLenis: vue.DefineComponent<vue.ExtractPropTypes<{
    root: {
        type: PropType<boolean>;
        default: boolean;
    };
    autoRaf: {
        type: PropType<boolean>;
        default: boolean;
    };
    options: {
        type: PropType<ConstructorParameters<typeof Lenis__default>[0]>;
        default: () => {};
    };
    props: {
        type: PropType<HTMLAttributes>;
        default: () => {};
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    root: {
        type: PropType<boolean>;
        default: boolean;
    };
    autoRaf: {
        type: PropType<boolean>;
        default: boolean;
    };
    options: {
        type: PropType<ConstructorParameters<typeof Lenis__default>[0]>;
        default: () => {};
    };
    props: {
        type: PropType<HTMLAttributes>;
        default: () => {};
    };
}>> & Readonly<{}>, {
    props: HTMLAttributes;
    root: boolean;
    autoRaf: boolean;
    options: Lenis.LenisOptions | undefined;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;
declare const vueLenisPlugin: Plugin;
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        'vue-lenis': typeof VueLenis;
    }
}

declare function useLenis(callback?: ScrollCallback, priority?: number): vue.ComputedRef<Lenis.default | undefined>;

export { VueLenis as Lenis, VueLenis, vueLenisPlugin as default, useLenis };
