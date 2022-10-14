<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    {{-- to implement vite --}}
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>

<body>

    <div id="example">
    </div>

    <div id="mytesting"></div>

    <div id="another" data-count="2" data-title="Dudoc" data-users={{ $users }}></div>

    {{-- <div id="mytesting"></div> --}}


</body>

</html>
