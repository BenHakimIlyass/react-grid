import styled, { css } from "@xstyled/styled-components";
import * as CSS from "csstype";

interface Metadata {
  key: string;
  value: CSS.Properties;
}
interface MetadataObj {
  [key: string]: Metadata;
}
type StyleProps = {
  [key: string]: CSS.Properties | MetadataObj;
};
type Props = {
  rows?: StyleProps;
  cols?: StyleProps;
  xgap?: StyleProps;
  ygap?: StyleProps;
  gap?: StyleProps;
  areas?: StyleProps;
  area?: StyleProps;
  rem?: boolean | undefined;
};
const handleUnit = (rem: boolean | undefined): string => (rem ? "rem" : "px");
const handleDeviceSizes = (style: StyleProps, styleName: string) => {
  console.log("style", style);
  console.log("styleName", styleName);
  if (
    typeof style !== "object" &&
    typeof style !== "string" &&
    typeof style !== "number"
  ) {
    return;
  } else if (typeof style === "object") {
    return css`
      ${Object.keys(style).map((objKey, index) => {
        console.log("media:", objKey);
        console.log("index:", index);
        console.log("inner style:", style[objKey]);
        return css`@media only screen and (min-width: ${[objKey]}px) {
        ${styleName}:${style[objKey]};
      }`;
      })}
    `;
  } else {
    const WrapStyle = css`
      ${styleName}: ${style};
    `;
    return WrapStyle;
  }
};
const Grid = styled.divBox<Props>`
  display: grid;
  ${({ rows }: Partial<Props>) => handleDeviceSizes(rows, "grid-template-rows")}
  ${({ cols }: Partial<Props>) => cols && `grid-template-columns:${cols};`}
  ${({ areas }: Partial<Props>) => areas && `grid-areas:${areas};`}
  ${({ area }: Partial<Props>) => area && `grid-area:${area};`}
  ${({ ygap, rem }: Partial<Props>) =>
    ygap && `grid-column-gap:${ygap}${handleUnit(rem)};`}
  ${({ xgap, rem }: Partial<Props>) =>
    xgap && `grid-row-gap:${xgap}${handleUnit(rem)};`}
  ${({ gap, rem }: Partial<Props>) =>
    gap && `grid-gap:${gap}${handleUnit(rem)};`}
`;
export default Grid;
