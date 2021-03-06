/*global require*/
'use strict';

require.config({
    shim: {<% if (includeSass) { %>
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }<% } %>
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore'<% if (includeSass) { %>,
        bootstrap: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap'<% } %>
    }
});

require([
    'backbone'
], function (Backbone) {
    Backbone.history.start();
});
