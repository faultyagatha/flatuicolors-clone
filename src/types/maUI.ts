import { ClassKeyInferable, ThemeOfStyles, ClassNameMap, ClassKeyOfStyles, PropsOfStyles } from "@material-ui/styles";

export type WithStylesPublic<
  StylesType extends ClassKeyInferable<any, any>,
  IncludeTheme extends boolean | undefined = false
  > = (IncludeTheme extends true ? { theme: ThemeOfStyles<StylesType> } : {}) & {
    classes?: ClassNameMap<ClassKeyOfStyles<StylesType>>;
    innerRef?: React.Ref<any>;
  } & PropsOfStyles<StylesType>;

