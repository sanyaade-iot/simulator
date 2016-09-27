const angular = require('angular')

const commonModule = require('../../../client/app/common')
const filterComponent = require('./filter')
// TODO rename: virtual-device-*, phone-*
const fanControlComponent = require('./fan-control')
const fanStateControlComponent = require('./fan-state-control')
const hvacDisplayComponent = require('./hvac-display')
const badgeButtonComponent = require('./badge-button')
const thunderboardComponent = require('./thunderboard')

const widgetsModule = angular.module('concaria.widgets', [
  commonModule
])
  .component('filter', filterComponent)
  .component('fanControl', fanControlComponent)
  .component('fanStateControl', fanStateControlComponent)
  .component('hvacDisplay', hvacDisplayComponent)
  .component('badgeButton', badgeButtonComponent)
  .component('thunderboard', thunderboardComponent)

module.exports = widgetsModule
