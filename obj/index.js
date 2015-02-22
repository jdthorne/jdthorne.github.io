(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var chain, show_panel, show_panel_functions;

show_panel_functions = {};

show_panel = function(name, action) {
  return show_panel_functions[name] = action;
};

$(document).ready(function() {
  return show_panel_functions['#jamesthorne']();
});

$(window).scroll(function() {
  return $('.panel').each(function() {
    var center_of_panel, one_third_of_window;
    center_of_panel = $(this).position().top + ($(this).outerHeight() / 2);
    one_third_of_window = $(window).scrollTop() + ($(window).height() * 0.7);
    if (!(center_of_panel < one_third_of_window)) {
      return;
    }
    if (show_panel_functions["#" + this.id] == null) {
      return;
    }
    show_panel_functions["#" + this.id]();
    return delete show_panel_functions["#" + this.id];
  });
});

chain = function(actions) {
  var run_next_action;
  run_next_action = function() {
    if (actions.length > 0) {
      return actions.shift()(run_next_action);
    }
  };
  return run_next_action();
};

show_panel('#jamesthorne', function() {
  return chain([
    (function(next) {
      return $("#jamesthorne .picture").animate({
        opacity: 1
      }, 200, next);
    }), (function(next) {
      return $("#jamesthorne .name").animate({
        opacity: 1
      }, 200, next);
    }), (function(next) {
      return $("#jamesthorne .title").animate({
        opacity: 1
      }, 200, next);
    }), (function(next) {
      return $("#jamesthorne .description").animate({
        opacity: 1
      }, 200, next);
    })
  ]);
});

show_panel('#printtopeer', function() {
  return console.log('hello');
});



},{}]},{},[1]);
