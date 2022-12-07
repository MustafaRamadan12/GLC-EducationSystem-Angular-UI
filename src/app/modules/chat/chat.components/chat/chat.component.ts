import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../../chat.service/chat.service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public message?: string;
  public messages: any;
  public check?: boolean;


  // private groupId: any;
  private studentId: string = '2411e7e6-5f85-4c88-b998-2d6264f25ac0';
  private groupId: string = 'c4e749db-6a73-ed11-b731-7ce9d3e8d6eb';

  public isTeacher: boolean = false;
  constructor(public signalRSerivice: SignalRService, private http: HttpClient) { }

  ngOnInit(): void {
    this.signalRSerivice.startConnection();
    // this.signalRSerivice.sendMessageToUsersListener();
    // this.signalRSerivice.sendMessageFromClientToServerListener();
    this.startHttpRequest();
  }
  private startHttpRequest = () => {
    this.http.post(`https://localhost:7027/api/chat/${this.studentId}/${this.groupId}`, {}).subscribe(result => {
      this.messages = result
      console.log(result);
      // this.groupId = this.messages[0].groupChatId;
    });
  }

  public sendMessage = (msg: any, isTeacher: boolean) => {
    let role: any = sessionStorage.getItem('Login data');
    isTeacher = JSON.parse(role).role == "Student" ? false : true;
    console.log(isTeacher);
    let obj = { Message: msg, IsSenderStudent: !isTeacher }
    this.http.post('https://localhost:7027/addMessage', obj).subscribe(
      res => {
        this.startHttpRequest();
        this.message = '';
      }
    )
  }
}
