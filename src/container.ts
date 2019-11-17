import 'reflect-metadata'
import { TestGreetClient } from './client/TestGreetClient';
import { MockGreetClient } from './client/MockGreetClient';
import { ProdGreetClient } from './client/ProdGreetClient';
import { container } from 'tsyringe'
import { TYPES } from './types'

const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === 'production') {
    container.register(TYPES.GreetClient, { useClass: ProdGreetClient })
} else if (NODE_ENV === 'development') {
    container.register(TYPES.GreetClient, { useClass: MockGreetClient })
} else if (NODE_ENV === 'test') {
    container.register(TYPES.GreetClient, { useClass: TestGreetClient })
}

export { container }