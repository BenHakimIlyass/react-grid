import styled from "@xstyled/styled-components";
import * as CSS from "csstype";

type Props = {
  rows?: CSS.Properties;
  cols?: CSS.Properties;
  xgap?: CSS.Properties;
  ygap?: CSS.Properties;
  gap?: CSS.Properties;
  areas?: CSS.Properties;
  area?: CSS.Properties;
  rem?: boolean | undefined;
};
const handleUnit = (rem: boolean | undefined): string => (rem ? "rem" : "px");
const Grid = styled.divBox<Props>`
  display: grid;
  ${({ rows }: Partial<Props>) => rows && `grid-template-rows:${rows};`}
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
