import { injectable } from 'tsyringe'
import { GreetClient } from './GreetClient';

@injectable()
export class TestGreetClient implements GreetClient {
    greet() {
        return "This environment is test."
    }
}