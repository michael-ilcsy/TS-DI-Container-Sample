import { injectable } from 'tsyringe'
import { GreetClient } from './GreetClient';

@injectable()
export class ProdGreetClient implements GreetClient {
    greet() {
        return "This environment is production."
    }
}