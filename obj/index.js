(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

$(document).ready(function() {
  var on_scroll, panels_to_show, show_next_panel, shown_panels;
  shown_panels = [];
  panels_to_show = [];
  show_next_panel = function() {
    var panel;
    if (panels_to_show.length === 0) {
      return;
    }
    panel = panels_to_show[0];
    return $(panel).animate({
      opacity: "1"
    }, 250, null, function() {
      panels_to_show.shift();
      shown_panels.push(panel);
      return show_next_panel();
    });
  };
  on_scroll = function(e) {
    var visible_bottom;
    if ($(window).scrollTop() < 5) {
      return;
    }
    visible_bottom = $(window).scrollTop() + ($(window).height() * 0.8);
    return $(".panel").each(function(i, panel) {
      return (function(panel) {
        var panel_top;
        panel_top = $(panel).offset().top;
        if (panel_top > visible_bottom) {
          return;
        }
        if (indexOf.call(shown_panels, panel) >= 0) {
          return;
        }
        if (indexOf.call(panels_to_show, panel) >= 0) {
          return;
        }
        panels_to_show.push(panel);
        if (panels_to_show.length === 1) {
          return show_next_panel();
        }
      })(panel);
    });
  };
  on_scroll();
  $(document).scroll(on_scroll);
  return $(".demo").each(function(i, demo) {
    return (function(demo) {
      return $(demo).click(function(e) {
        if (e.which === 2) {
          return window.open($(demo).attr("data-url"));
        } else {
          return window.location = $(demo).attr("data-url");
        }
      });
    })(demo);
  });
});



},{}]},{},[1]);
