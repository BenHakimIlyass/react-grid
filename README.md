# react-grid
Created with CodeSandbox
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

## Todo

- Support breakpoints
- Use arrays instead of string when using rows and cols props.
