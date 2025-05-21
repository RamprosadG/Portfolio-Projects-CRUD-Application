<?php

return [

    'paths' => ['api/*', 'project/*', '*'],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'], // Replace * with your frontend URL if needed

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
