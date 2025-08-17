import type { CallAdapter } from './TelAdapter';

export class MockAdapter implements CallAdapter {
  async dial(number: string) {
    console.log(`Mock dialing ${number}`);
  }
}
