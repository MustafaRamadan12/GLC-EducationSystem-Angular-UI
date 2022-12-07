import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { LogLevel } from '@microsoft/signalr';


@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnectionBuilder!: signalR.HubConnection;
  public messages: any;

  public startConnection = async () => {
    this.hubConnectionBuilder = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7027/chat/', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      }).configureLogging(LogLevel.Information).build();

    await this.hubConnectionBuilder.start()
      .then(() => console.log('Connection started...'))
      .catch(err => console.log('An Error occured while retreiving data' + err));

    this.hubConnectionBuilder.on('SendMessagesToUser', (result: any) => {
      this.messages = result
     console.log(this.messages[0])
    })
  }


  // public sendMessageToUsersListener = () => {
  //   this.hubConnectionBuilder.on('SendMessagesToUser', (result: any) => {
  //     // console.log(result);
  //   }
  //   );
  // }

  // public sendMessageFromClientToServer = (msg: any) => {
  //   this.hubConnectionBuilder.invoke('ReceiveMessageFromUser', msg)
  //     .catch(err => console.log('ERROR OCCURED WHILE SENDING DATA!'))
  // }
  // public sendMessageFromClientToServerListener = () => {
  //   this.hubConnectionBuilder.on('ReceiveMessageFromUser', (result: any) => {
  //     // console.log("Data from c => s Listener....")
  //     // console.log(result)
  //   })
  // }

  constructor() { }
}
