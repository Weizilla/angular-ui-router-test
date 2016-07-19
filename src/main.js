"use strict";

import angular from "angular";
import "../index.html";

angular.module("app", [])
    .controller("MainCtrl", function() {
        var self = this;
        self.world = "world";
    });
