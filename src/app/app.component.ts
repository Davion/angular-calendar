import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular';  
import { EventInput } from '@fullcalendar/core';  
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  
  // @ViewChild('fullcalendar', null) calendarComponent: FullCalendarComponent;
  // options: any;
  // eventsModel: any[] = [];
  // calendarVisible = true;
  // calendarWeekends = true;
  // calendarEvents: EventInput[] = [
  //   { title: 'Event Now', start: new Date() }
  // ];
  // toggleVisible(){
  //   this.calendarVisible = !this.calendarVisible;
  // }
  // ngOnInit(){
  //   this.options = {
  //     editable: false,
  //     disableDragging: false,
  //     selectable: true,
  //     theme: 'standart',
  //     header: {
  //       right: 'prev, next, today',
  //       left: ''
  //     },
  //     validRange: {
  //       start: '2017-05-01',
  //       end: '2019-06-01'
  //     },
  //     plugins: [dayGridPlugin]
  //   };
  //   this.calendarEvents = [{
  //     title: 'Updaten Event',
  //     start: '2020-08',
  //     end: '2020-10'
  //   }];
  // }
  // toggleWeekends(){
  //   this.calendarWeekends = !this.calendarWeekends;
  // }
  // eventClick(model){}
  // dateClick(model){}
  // eventDragStop(model){}
  
  // gotoPast(){
  //   let calendarApi = this.calendarComponent.getApi();
  //   calendarApi.gotoDate('2000-01-01');
  // }

  // handleDateClick(arg){
  //   if(confirm('Would you like to add an event to ' + arg.dateStr + ' ?')){
  //     this.calendarEvents = this.calendarEvents.concat({
  //       title: 'New Event',
  //       start: arg.date,
  //       allDay: arg.allDay
  //     })
  //   }
  // }
}
