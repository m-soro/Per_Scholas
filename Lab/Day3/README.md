# Find an HTML tag - Give an explanation about it and style it.

**Here I chose the `nav` tag**

- The `nav` lives inside the `header` tag.
- This is mainly used for assistive technology to separate the main navigation links vs. just regular links.

A _super easy_ way to style the `nav` is:

```
/* Just lower the Nav Bar a bit*/

.nav-class {
  margin: 30px 0;
}
/*This is ul, set to display flex so list items displays evenly */
/*Use justify content and list-style-type*/

.nav-options {
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
}
```

The `display:flex` basically enables responsiveness. It gives the elements the room to expand and take up available space.

**More on flexbox:**
[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
