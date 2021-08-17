# is-truish

Converts a somewhat true-ish expression to the equivalent boolean value.

# Installation

```sh
npm i is-truish
```

# Usage

```js
const isTruish = require("is-truish");

const value = "yes";

if (isTruish(value)) {
  console.log("truish!");
}
```

# Equivalence table

| Expression        | Boolean value |
| ----------------- | ------------- |
| `1` (number)      | `true`        |
| `"1"` (string)    | `true`        |
| `"yes"`           | `true`        |
| `true` (boolean)  | `true`        |
| `"true"` (string) | `true`        |

Everything else is `false` (`"no"`, `false`, `"false"`, `0`, `"0"`, `NaN`...).
