export interface CallAdapter {
  dial(number: string): Promise<void>;
}

export class TelAdapter implements CallAdapter {
  async dial(number: string) {
    console.log(`Dialing ${number}`);
  }
}
