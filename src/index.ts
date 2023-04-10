// npm install @apollo/server express graphql cors body-parser
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

interface MyContext {
  token?: String;
}

const port: number = 6000;

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server.start().then(() => {
    app.use(
        '/',
        cors<cors.CorsRequest>(),
        bodyParser.json({ limit: '50mb' }),
        expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
        }),
    );
  
});

new Promise<void>((resolve) => httpServer.listen({ port }, resolve));