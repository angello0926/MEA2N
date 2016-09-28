export class Message {

    constructor (public content: string, public messageId?:string, public username?: string, public userId?:string ){
      this.content =content;
      this.messageId= messageId;
      this.username = username;
      this.userId = userId;

    }
}