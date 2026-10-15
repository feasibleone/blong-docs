/**
 * glassReflection — runtime positioning for the glass theme glare.
 *
 * The layout can hold several vertical "lanes": a full-width header toolbar,
 * one or two card columns (content re-lays itself between a single and two
 * columns as the width changes), and a separate Form Inspector rail. A real
 * glare is a straight light edge, and panels that stack in the SAME lane share
 * it, so their silver → black edges are all segments of ONE straight line
 * (tops and bottoms align). Different lanes get their own parallel edges —
 * they do not try to share the header's line because the header spans the
 * whole width.
 *
 * The knob is the CSS `linear-gradient` axis angle `GLARE_ANGLE_DEG`
 * (measured clockwise from the top, like `linear-gradient(103deg, …)`). The
 * visible light/dark edge is PERPENDICULAR to that axis:
 *
 *   axis 90°  (gradient → right)  ⇒ edge vertical   (left lit / right dark)
 *   axis 103°                     ⇒ edge ≈ 77° from horizontal (steep)
 *   axis 135°                     ⇒ edge ≈ 45°
 *   axis 150°                     ⇒ edge ≈ 30° (nearly horizontal — flat)
 *   axis 180°  (gradient → down)  ⇒ edge horizontal (top lit / bottom dark)
 *
 * So to make the light/dark edge MORE VERTICAL, move the axis toward 90°.
 *
 * Geometry per lane: the gradient starts (silver) at the box corner with the
 * smallest projection onto the axis, and the edge sits where the projection
 * equals one fixed constant `C` for the whole lane. Each member's shift is
 *
 *   shift_i = (C − axis-projection of panel top-left) / axis span of panel i
 *
 * with `C` anchored at the lane's top-most CARD (not the wide header) so the
 * reflection is centred on the content column, not stretched by the header.
 * Panels that fall fully on the dark side of their lane's edge keep a faint
 * top-left sheen instead of turning solid black.
 */
/**
 * CSS linear-gradient axis angle (degrees) — the single knob, 90..180.
 * Larger → axis more vertical (edge more horizontal); smaller → axis more
 * horizontal (edge more vertical). See the note above. The CSS gradients read
 * the pinned `--glare-angle` and this module derives shifts from the same
 * angle, so the two always agree.
 */
export declare const GLARE_ANGLE_DEG = 103;
/** Glass surfaces that carry the silver → black edge. */
export declare const GLASS_PANEL_SELECTOR = ".p-card, .p-toolbar, .blong-property-editor.blong-inspector";
/**
 * Recompute `--glare-shift` per lane so each lane's silver→black edges lie on
 * ONE straight line, pin the shared `--glare-angle`, and give the Form
 * Inspector its independent centered gradient. Runs on every size change, so
 * the lanes follow the responsive single / two column layout automatically.
 */
export declare function updateGlassReflections(scope: HTMLElement): void;
//# sourceMappingURL=glassReflection.d.ts.map