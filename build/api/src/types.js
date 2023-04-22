"use strict";
// Ahora vamos a definir los tipos
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
// weather en el diaries.json quiero que sea un enum de unos determinados valores
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather = exports.Weather || (exports.Weather = {}));
// visibility en el diaries.json quiero que sea un enum de unos determinados valores
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
