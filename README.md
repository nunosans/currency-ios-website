# Currency for iOS Website

![alt tag](https://i.imgur.com/MgCOzHu.jpg)

This is the marketing website for the [Currency for iOS App](https://itunes.apple.com/app/currency-simple-currency-calculator/id1109685198?mt=8) developed by [Nuno Coelho Santos](https://nunocoelhosantos.com/) ([@nunosans](https://github.com/nunosans)).

## Installation

This website is built with [Middleman](https://middlemanapp.com), a static website generator framework.

To install all dependencies, run on the project directory:
```
$ bundle install
```

To run the local web server, run the following command on the project directory:
```
$ bundle exec middleman server
```

To build the website, run the following command on the project directory:
```
$ bundle exec middleman build
```

## Localizing CJK Languages

Use Google's [Budou](https://github.com/google/budou) tool for correct line breaking in Chinese, Japanese and Korean. The tool will create a `<span class="wordwrap"></span>` element around each word.
