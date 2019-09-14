# React Accessibility Label

This repository contains a React package that will bring better accessibility to your app. The intent is to provide an easy way to work with browser and AT (Assistive Technology) differences without adding too much weight to your code. 

## How to use

```jsx
import ReactAccessibilityLabel from "react-a11y-label";
const welcomeText = "Welcome to React Accessibility Label"
const text = "This text is inclusive!";

<ReactAccessibilityLabel text={welcomeText}>
<h1>{welcomeText}</h1>
<ReactAccessibilityLabel {text}/>
<p aria-hidden="true">{text}</p>
```

1. import `'react-a11y-label` into your app
1. Create the `<ReactAccessibilityLabel /> that corresponds to your text.
  1. Add the `text` property and pass in the same text that the tag below will display.
1. Add `aria-hidden="true"` to the original tag. 


That's it!

## How this code works

The code simply adds a `<span>` to your web page with the `text` set as both the inner HTML and the `aria-label`. Since so many browsers and ATs function differently, this component simplifies the thinking process but ensures functionality for all AT users.

Currently, the code is tested with the following browser-AT combinations:

1. Chrome and NVDA
1. Microsoft Edge and Narrator