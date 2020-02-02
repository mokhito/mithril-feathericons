# mithril-feathericons

Customizable [Mithril] components of [Feather icons].

Inspired by jessebraham's [mithril-feather-icons]

[Feather icons]: https://feathericons.com
[Mithril]: https://mithril.js.org
[mithril-feather-icons]: https://github.com/jessebraham/mithril-feather-icons

## Install

```bash
$ npm i mithril-feathericons
```

or, if you use Yarn:

```bash
yarn add mithril-feathericons
```

## Usage

Example importing all the icons:

```javascript
import * as icons from "mithril-feathericons"

class CloseButton {
    view: (vnode) => {
      return m("button", {
          class: "btn"
        }, [
          "Close",
          m(icons.X),
        ])
    }
}
```

To selectively import some icons:

```javascript
import { Plus } from "mithril-feathericons"

class AddArticleButton {
    view: (vnode) => {
      return m("button", {
          class: "btn"
        }, [
          "Add article",
          m(Plus),
        ])
    }
}
```

It is possible to set custom values for the following SVG attributes: width, height, fill and stroke.

For example:

```javascript
import { Plus } from "mithril-feathericons"

class AddArticleButton {
    view: (vnode) => {
      return m("button", {
          class: "btn"
        }, [
          "Add article",
          m(Plus, { stroke: "red" }),
        ])
    }
}
```

## Building

In order to build the components locally (when a new version of Feather icons is released for example), proceed as follows:

Clone the repository and install the dependencies:

```bash
$ git clone https://github.com/mokhito/mithril-feathericons.git
$ cd mithril-feathericons
```

Run the build script:

```bash
$ npm run build
```

or with Yarn:

```bash
$ yarn build
```