import { GreetClient } from '../client/GreetClient';
import { injectable, inject } from 'tsyringe'
import { TYPES } from '../types';

@injectable()
export default class GreetUseCase {
    constructor(
        @inject(TYPES.GreetClient) private greetClient: GreetClient,
    ) { }

    greet() {
        console.log(this.greetClient.greet())
    }
}