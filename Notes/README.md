# Notes

**IF ELSE/TERNARY WITHOUT THE ELSE OR FALSE STATEMENT**

```javascript
function disemvowel(string) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let sansVowels = "";
  for (let i = 0; i < string.length; i++) {
    !vowels.includes(string[i]) && (sansVowels += string[i]);
  }
  return sansVowels;
}
```

Instead of writing it as ternary, which works as well. But to eliminate the null in the `true` or left side

`vowels.includes(string[i]) ? null : (sansVowels += string[i])`

I could write it as:

`!vowels.includes(string[i]) && (sansVowels += string[i]);;`

`if` expression on the left is true it will execute the right side.
Without the `!` it will print `undefined` Its its way of handling `else`
With the `!` I'm eliminating the `false` or `else` statement.

**end**

[Alternative to if else](https://dev.to/b3ns44d/alternative-to-if-else-and-switch-object-literals-in-javascript-3nde)

> Some cool ways to use objects as a look up table

---

Emmet Shortcut - Quickly generate markup
ul#comments>li.comment{comment}\*3

<ul id="comments">
<li class="comment">comment</li>
<li class="comment">comment</li>
<li class="comment">comment</li>
</ul>

---

## Command Shortcut for React

'open -a TextEdit`

```
mkdir PROJECT ; cd PROJECT ; npm create vite@latest . ; npm install ; mkdir ./src/components ; touch ./src/components/ComponentName.jsx ; echo ; cat src/index.css >> src/App.css ; rm ./src/index.css ; open -a TextEdit ./src/main.jsx ; echo ">>>Delete import './index.css<<<' " ; npm run dev
```

- `ctrl + c` stop the server

- To publish in github pages:
- package.json

```
 "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build --base='./'",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

- run `npm run build` - this will minify the files.

- in vite.config.js add build option, outDir: "docs" - will copy what's on dist folder to docs folder.

```
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "docs",
  },
});
```

- in GitHub pages under Build and deployment, select **/docs**

---

# REACT TRAINING NOTES

[React training](https://github.com/m-soro/React-Training)
