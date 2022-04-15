/**
 *
 * bar.js
 * simple, elegant bar chart library
 * {date} - version 1.0
 * {url}
 *
 * Copyright 2017 {your name}
 * Released under the MIT License
 * {license url}
 *
 */

"use strict";

function BarChart(targetId, width, height, data) {
  // Base
  var chart = this;

  chart.configureChart(targetId, width, height, data);
  chart.performPreOperations();
}

BarChart.prototype.configureChart = function (targetId, width, height, data) {
  // Base
  var chart = this;

  chart.setCanvasParameters(targetId, width, height, data);
  chart.setChartParameters();
};

BarChart.prototype.setCanvasParameters = function (
  targetId,
  width,
  height,
  data,
) {
  // Base
  var chart = this;

  // Global Specifications come from outside
  chart.id = targetId;
  chart.width = width;
  chart.height = height;
  chart.data = data;
};

BarChart.prototype.setChartParameters = function () {
  // Base
  var chart = this;

  // Axe Configurations
  chart.axisRatio = 10; // in terms of percentage
  chart.verticalMargin = (chart.height * chart.axisRatio) / 100;
  chart.horizontalMargin = (chart.width * chart.axisRatio) / 100;
  chart.axeColor = "#b1b1b1";
  chart.axeWidth = 0.75;

  // Label Configurations
  chart.fontRatio = 3;
  chart.fontFamily = "times";
  chart.fontStyle = "normal";
  chart.fontWeight = "300";
  chart.fontColor = "#666666";
  chart.verticalFontSize = (chart.height * chart.fontRatio) / 100;
  chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;

  // Guideline Configurations
  chart.guidelineColor = "#e5e5e5";
  chart.guidelineWidth = 0.5;
};

BarChart.prototype.performPreOperations = function () {
  // Base
  var chart = this;
};
