import { injectable } from 'tsyringe'
import { GreetClient } from './GreetClient';

@injectable()
export class MockGreetClient implements GreetClient {
    greet() {
        return "This environment is development."
    }
}