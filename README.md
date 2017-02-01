# Front-end javascripts modules

Modular scripts, mainly used as imports in browser-side js.

## Getting Started

Just copy the needed scripts and require them in your main js file. Most of the modules use emacs6 so some compiler might be useful.

## Useful tools

* [Babel](https://babeljs.io/) - JavaScript compiler
* [webpack](https://webpack.github.io/) - Module bundler

## Modules

### Spoken word trigger (spoken-word-trigger)

Basic detect trigger-word(s) function using browser speech recognition (currently Crome only). Expects a result function, trigger words (can be blank) and optional repeat boolean to stop the script after first run.

```
spokenWordTrigger(resultFunction, "Firstword", "SecondWord", true);
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


