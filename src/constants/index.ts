export const DRAWER_WIDTH = 400;

/** bootstrap media query ranges: 
 * https://getbootstrap.com/docs/4.0/layout/overview/
 */
export const BREAKPOINTS = {
  up() { },
  down(size: keyof typeof sizes) {
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px"
    };
    return `@media (max-width: ${sizes[size]})`;
  }
};