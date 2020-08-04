Simple and useful react grid components, [here](https://codesandbox.io/s/boring-satoshi-xyeqx?file=/src/App.tsx) is a live demo.

## Recipes

- @xstyled/styled-components
- styled-components

## Install

```jsx
yarn add react-declarative-grid
```

## Usage

```jsx
<Grid rows="100px 100px" cols="100px 100px" xgap={6} ygap={6} rem>
  <Square />
  <Square />
  <Square />
  <Square />
</Grid>
```

## Breakpoints

If you want to use the grid props with different breakpoints, you can just pass it as object, in the example below the `grid-template-rows` will be `1fr` from the size **0px** and `100px 100px` from size **400px**.

```jsx
<Grid
  rows={{ 0: "1fr", 500: "100px 100px" }}
  cols={{ 0: "100px", 400: "140px 140px" }}
  xgap={{ 300: 6, 600: 8 }}
  ygap={6}
>
  <Square />
  <Square />
  <Square />
  <Square />
</Grid>
```

## API

Here you can see all props and their equivalent in css:

**rows** means `grid-template-rows`

**cols** means `grid-template-columns`

**xgap** means `grid-row-gap`

**ygap** means `grid-column-gap`

**gap** means `grid-gap`

**areas** means `grid-template-areas`

**area** means `grid-area`

**rem** is a boolean means use `rem` instead of `px` while using xgap, ygap or gap (by default it's `px`)

## @xstyled

Actually you can also pass all xstyled Box props.
