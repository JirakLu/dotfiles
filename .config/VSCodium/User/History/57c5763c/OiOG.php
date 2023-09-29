<?php

require_once __DIR__ . '/Route.php';

function getExportedRoutes(): array
{
    return [
        (new Route(url: "/test", controller: TestController::class, method: "test")),
        (new Route(url: "/test/:id/:number", controller: TestController::class, method: "testId"))
    ];
}