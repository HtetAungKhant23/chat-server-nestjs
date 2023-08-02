import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  // messages: Message[] = [{ name: 'Bot', text: `welcome ...` }];
  messages: Message[] = [];
  clientToUser = {};

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    const message = {
      name: `Bot`,
      text: `${this.clientToUser[clientId]} joined the room`,
    };
    this.messages.push(message);
    console.log(this.messages);
    // return Object.values(this.clientToUser);
    return this.messages;
  }

  create(createMessageDto: CreateMessageDto, clientId: string) {
    const message = {
      name: this.clientToUser[clientId],
      text: createMessageDto.text,
    };
    this.messages.push(message);
    return message;
  }

  findAll() {
    console.log('reached');
    console.log(this.messages);
    return this.messages;
  }
}
