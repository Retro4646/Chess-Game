    import { WebSocket } from "ws";

    export class Game {
        private player1: WebSocket;
        private player2: WebSocket;
        private board: string;

        constructor(player1: WebSocket  , player2: WebSocket){
            this.player1 = player1;
            this.player2 = player2;
        }                   
    }