import { container } from './container'
import GreetUseCase from './usecase/GreetUseCase';

const main = () => {
    const greetUseCase = container.resolve(GreetUseCase)
    greetUseCase.greet()
};

main();