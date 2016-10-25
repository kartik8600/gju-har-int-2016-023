'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('gjuHarInt2016023App.util', [])
  .factory('Util', UtilService)
  .name;
