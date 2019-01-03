import EngineStates from './EngineStates';
import { ILogger } from '../Utils/Logger';

export interface IEngine {
  engineState: string;
  volume: number;
  fuelType: string;
  numberOfCylinders: number;
  ambientTemperature: number;
  currentTemperature: number;
  maximumTemperature: number;

  updateEngineState: (newState: string) => void;
  start: () => void;
  stop: () => void;
  idle: () => void;
  stopCompleted: () => void;
  run: () => number;
}

export class V8Engine implements IEngine {
  engineState: string;
  volume: number;
  numberOfCylinders: number;
  fuelType: string;
  ambientTemperature: number;
  currentTemperature: number;
  maximumTemperature: number;
  logger: ILogger;

  constructor(
    volume: number,
    numberOfCylinders: number,
    fuelType: string,
    ambientTemperature: number,
    maximumTemperature: number,
    logger: ILogger
  ) {
    this.volume = volume;
    this.fuelType = fuelType;
    this.numberOfCylinders = numberOfCylinders;
    this.ambientTemperature = ambientTemperature;
    this.currentTemperature = ambientTemperature;
    this.maximumTemperature = maximumTemperature;
    this.logger = logger;

  };

  start() {
    if (this.engineState !== EngineStates.OFF) {
      this.logger.warn('WARNING: Attempted to start the engine while it was already running.');
    }
    else {
      this.updateEngineState(EngineStates.STARTING);
    }
  };

  updateEngineState(newState) {
    this.engineState = newState;
  }

  stop() {
    this.updateEngineState(EngineStates.STOPPING);
  };

  idle() {
    this.updateEngineState(EngineStates.IDLING);
  };

  stopCompleted() {
    this.updateEngineState(EngineStates.OFF);
  };

  run() {
    this.currentTemperature += 0.01;

    // If still running, return 1. Else return 0.
    if (this.currentTemperature < this.maximumTemperature)
      return 1;
  };
}