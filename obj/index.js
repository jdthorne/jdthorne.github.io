(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

$(document).ready(function() {
  var current_panel, on_scroll, panels_to_show, show_next_panel, shown_panels;
  current_panel = null;
  shown_panels = [];
  panels_to_show = [];
  show_next_panel = function() {
    if (panels_to_show.length === 0) {
      return;
    }
    current_panel = panels_to_show[0];
    return $(current_panel).animate({
      opacity: "1"
    }, 250, null, function() {
      panels_to_show.shift();
      shown_panels.push(current_panel);
      return show_next_panel();
    });
  };
  on_scroll = function(e) {
    var visible_bottom, visible_top;
    visible_top = $(window).scrollTop();
    visible_bottom = $(window).scrollTop() + ($(window).height() * 0.8);
    return $(".panel").each(function(i, panel) {
      return (function(panel) {
        var panel_bottom, panel_top;
        panel_top = $(panel).offset().top;
        panel_bottom = panel_top + $(panel).height();
        if (panel === current_panel) {
          return;
        }
        if (panel_top > visible_bottom) {
          return;
        }
        if (indexOf.call(shown_panels, panel) >= 0) {
          return;
        }
        if (indexOf.call(panels_to_show, panel) >= 0) {
          return;
        }
        if (panel_bottom < visible_top) {
          return $(panel).css('opacity', 1);
        }
        panels_to_show.push(panel);
        if (panels_to_show.length === 1) {
          return show_next_panel();
        }
      })(panel);
    });
  };
  $(document).scroll(on_scroll);
  on_scroll();
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
