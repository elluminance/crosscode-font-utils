export {};

declare global {
    namespace ig {
        namespace ColoredFont {
            interface Constructor extends ImpactClass<ColoredFont> {
                new (path: string, color: string, replacedColor?: string): ColoredFont;
            }
        }
        interface ColoredFont extends ig.Image {
            color: ig.RGBColor;
            replacedColor: ig.RGBColor;

            getCacheKey(path: string, color: string): string;
        }
        let ColoredFont: ColoredFont.Constructor;
    }

    namespace sc {
        enum FONT_COLORS {
            WHITE = 0,
            YELLOW = 3,
            ACTUAL_PURPLE = 6,
            BLUE = 7,
            DARK_BLUE = 8,
            PINK = 9,
            TEAL = 10,
            LIME = 11,
            FUCHSIA = 12,
            OLIVE = 13,
            VIOLET = 14,
            BROWN = 15,
            GOLD = 16,
            DARK_RED = 17,
        }

        interface FontSystem {
            addColoredFont(this: this, key: string, colorString: string, fontColor: sc.FONT_COLORS): void;
        }

        let FONT_COLOR_ALIASES: Record<string, sc.FONT_COLORS>;
    }

    function FontUtilsShowColorTestDialog(): void;
}