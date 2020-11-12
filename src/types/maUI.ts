import { ClassKeyInferable, ThemeOfStyles, ClassNameMap, ClassKeyOfStyles, PropsOfStyles } from "@material-ui/styles";

/** supposed to be extended: 
 *  interface Props extends WithStylesPublic<typeof styles> { seedPalettes: IPalette[]; }
*/
export type WithStylesPublic<
  StylesType extends ClassKeyInferable<any, any>,
  IncludeTheme extends boolean | undefined = false
  > = (IncludeTheme extends true ? { theme: ThemeOfStyles<StylesType> } : {}) & {
    classes?: ClassNameMap<ClassKeyOfStyles<StylesType>>;
    innerRef?: React.Ref<any>;
  } & PropsOfStyles<StylesType>;

