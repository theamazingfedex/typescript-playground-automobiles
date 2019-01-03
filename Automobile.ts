import { IEngine, V8Engine } from './Engine/Engine';
import FuelTypes from './FuelSystem/FuelTypes';

module Automobile {
  let make: string;
  let model: string;
  let engine: IEngine;
}

let engine: IEngine = new V8Engine(5.5, 8, FuelTypes.GASOLINE, 60, 280);
engine.start();