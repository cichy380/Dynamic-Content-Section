# Dynamic Content Section

A [jQuery](http://jquery.com/) plugin for easier creation of sections with dynamic content loaded using AJAX technology.

## Demos

http://example.silversite.pl/dcb/

## Installation

Include the minified file in your project.

```html
<script src="jquery.js"></script>
<script type="text/javascript" src="jquery.dynamicContentSection.min.js"></script>
```

## Usage

HTML code:
```html
<section class="ajax-content" 
         data-ajax-data='{"param1":"value1","param2":"value2"}'></section>
```

JavaScript code:
```js
$(function() {
    $(".ajax-content").ajaxContent({
        url: '/api/v1/news/123/',
        method: 'GET',
    });
});
```

## Development

Install dependencies:

```
npm install
```

Commands:

* `npm run webpack` — Compile assets for developing (with source maps, without minify)
* `npm run watch` — Compile assets when file changes are made
* `npm run build` — Compile and optimize the files in your assets directory

## License

Code released under the MIT license.