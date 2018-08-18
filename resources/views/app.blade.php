<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel 3</title>

        <link rel="stylesheet" href="https://unpkg.com/buefy/lib/buefy.min.css">
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>

        @if (! app()->isLocal())
            <script src="{{ mix('js/manifest.js') }}"></script>
            <script src="{{ mix('js/vendor.js') }}"></script>
        @endif

        <script src="https://unpkg.com/buefy"></script>
        <script src="{{ mix('js/app.js') }}"></script>

    </body>
</html>
