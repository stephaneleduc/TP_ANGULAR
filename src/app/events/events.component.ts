import { Component, OnInit } from '@angular/core';
import { MyEvent, MyEventLiteral } from '../models/MyEvent';
import { MyeventService } from '../services/myevent.service';

//Routes parameters
import { ActivatedRoute } from '@angular/router';
import { Authentication } from '../providers/authentication';
import { Link } from '../models/Link';
import { MyeventComponent } from '../myevent/myevent.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],

  providers: [MyeventService]
})


export class EventsComponent implements OnInit {
  
  public btn: string;

  public myevents: MyEvent[] = [];

  public current_event: MyEvent = MyEvent.empty();

  public curent_link: Link = Link.empty();


  constructor( private myeventservice: MyeventService, 
               private activatedRoute: ActivatedRoute,
               private authentication: Authentication
  
  ) {}


  ngOnInit(): void {


    this.activatedRoute.params.subscribe(

      (datas) => {
        const id : number = datas.id_category;
        this.myevents = [];
        if (!id) {
          this.getAllEvents();
        }
        else {
          this.getEventsByCategory_id (id );
        }
        
      },
      (error) => {

        console.log(error);
      }
    )

    

    
  }


  getEventsByCategory_id (id :number) {

    this.myeventservice.getAllEventsByCatId( id ).subscribe(
      (datas) => {
        if (datas.success) {


          this.populateEvent (datas.evenements);
        }

      },
      (error) => {

        console.log (error );
      }
    )

  }

  getAllEvents(): void {

    this.myeventservice.getAllEvents().subscribe(

      (datas) => {
        if (datas.success) {

          this.populateEvent (datas.evenements);
        }
      },
      (error) => {
        console.log(error);
      }

    )

  }

  populateEvent( json_datas: MyEventLiteral[] ): void {

    for ( let json_data of json_datas ) {

      const myevent = new MyEvent(
        json_data.nom,
        json_data.description,
        json_data.date,
        json_data.lieu,
        json_data.id_categorie,
        json_data.isParticipated
      );
      myevent.setId(json_data.id);
      this.myevents.push( myevent );

    }

  }

  addEvent() :void {

    const myevent = new MyEvent(
      this.current_event.getNom(),
      this.current_event.getDescription(),
      this.current_event.getDate(),
      this.current_event.getLieu(),
      this.current_event.getId_categorie(),
      this.current_event.getIsParticipated()

    )

    this.myeventservice.addEvent(myevent).subscribe(

      (datas) => {

        if (datas.success) {

          myevent.setId(datas.id);
          this.myevents.push(myevent);
  
          this.current_event = MyEvent.empty();
        }

      },
      (error) => {
        console.log(error);
      }

    )

  }

  deleteEvent( position: number) :void {

    const id = this.myevents[position].getId();

    this.myeventservice.deleteEvent(id).subscribe(
      (datas) => {
        
        if (datas.success) {
          this.myevents.splice(position, 1);
        }
      },
      (error) => {
        console.log(error);
      }
    )

  }

  verifyButton (value : string) {
    
    this.btn = value;
  }

  addOrDeleteEventForUser (position : number) {

    if (this.btn == "Participer") {

      this.addEventForUser(position);

    }

    else if ( this.btn == "Ne plus participer") {

      this.deleteEventForUser(position);

    }
  }


  deleteEventForUser( position : number) {

    const user_id = this.authentication.getConnected_id();

    const event_id = this.myevents[position].getId();

    let link = new Link (user_id, event_id);

    this.myeventservice.deleteEventForUser(link).subscribe(

      (datas) => {
        if (datas.success) {

          this.myevents[position].setIsParticpated(false);
        }
      },

      (error) => {
        console.log(error);

      }
    )



  }


  addEventForUser(position : number) {

    const user_id = this.authentication.getConnected_id();

    const event_id = this.myevents[position].getId();

    let link = new Link (user_id, event_id);
    
    this.myeventservice.addEventForUser(link).subscribe(

      (datas) => {
        if (datas.success) {

          this.myevents[position].setIsParticpated(true);

        }
      },
      (error) => {
        console.log(error);
      }

    )
    
    
  }



}

