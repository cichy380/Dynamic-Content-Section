# Dynamic Content Section

A [jQuery](http://jquery.com/) plugin for easier creation of sections with dynamic content loaded using AJAX technology.

## Demo

http://example.silversite.pl/dcb/demo/ (disable [Adblock](https://getadblock.com/) in your browser if you use)

## Installation

Include the minified file in your project.

```html
<script src="jquery.js"></script>
<script type="text/javascript" src="jquery.ajaxContent.min.js"></script>
```

## Example of usage

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

### AJAX response format expected

Plugin expected response in JSON format based on [JSON API Specification v1.0](http://jsonapi.org/format/) with required 
`data` and `html` keys.

JSON code:
```js
{"data":[{"html":"<html-code-here/>"}]}
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
