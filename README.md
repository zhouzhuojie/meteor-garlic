meteor-garlic [![Build Status](https://travis-ci.org/zhouzhuojie/meteor-garlic.svg)](https://travis-ci.org/zhouzhuojie/meteor-garlic)
================

Garlic.js allows you to automatically persist your forms' text field values locally, until the form is submitted. See details from the official garlicjs [website](http://garlicjs.org/).

Installation
------------

```
meteor add mrt:garlic
```


Basic usage
-------------

Add `data-persist="garlic"` to the forms you want to auto-persist:

``` html
<form data-persist="garlic">
  <input type="text" name="some-unique-id"/>
  ...
</form>
```

Add `$( "form[data-persist='garlic']" ).garlic();` to the rendered function if it fails to run (typically when combined with iron-router, you need to manually trigger `garlic()`).

``` js
Template.sth.rendered = function(){
    $( "form[data-persist='garlic']" ).garlic();
};
```


Detailed usage
--------------

Documentation from the official [garlicjs](http://garlicjs.org/).

* Want to protect all your forms on the same page, without having to add for each one of them `data-persist="garlic"`?

    ```
    $( 'form' ).garlic();
    ```
* Want to specifically chart fields persisted by Garlic? Use the auto-added `class="garlic-auto-save"` class!
* Never destroy localStorage for a form: use `data-destroy="false"` (don't work on inputs separately, only on whole form inputs)
* Store form localStorage accross all domain (by default, storage is specific to each pages), use `data-domain="true"`
* Manually call garlic in javascript

    ```
    $( '[rel=persist]' ).garlic();
    ```
* Destroy storage for an element (don't work on an entire form yet, only input by input)

    ```
    $( 'input.no_good' ).garlic( 'destroy' );
    ```
* Be notified when Garlic retrieve a field val by a custom overridable `onRetrieve` callback:

    ```
    $( 'input.no_good' ).garlic( {
      onRetrieve: function ( elem, retrievedValue ) {
          console.log( 'The retrieved value for ' + elem.name() + ' is : ' + retrievedValue );
      }
    } );
    ```
* Generate your own key-storage fields policy to avoid conflicts:

    ```
    $( '#form' ).garlic( {
      getPath: function ( $elem ) {
          return $elem.attr( 'id' );
      }
    } );
    ```
