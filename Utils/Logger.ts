export interface ILogger {
  log: (message: any) => void;
  error: (message: any) => void;
  warn: (message: any) => void;
  showToast: (message: any) => void;
}

export class ConsoleLogger implements ILogger {
  log(message: any) {
    console.log(message);
  }
  error(message: any) {
    console.error(message);
  }
  warn(message: any) {
    console.warn(message);
  }
  showToast(message: any) {
    alert(message);
  }
}