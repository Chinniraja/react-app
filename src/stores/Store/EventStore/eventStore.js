import {observable,action,computed} from 'mobx';
import EventModel from '../../Model/EventModel/eventModel.js';

class EventStore {
    @observable eventName
    @observable eventLocation
    @observable eventsList
    
    constructor(){
        this.eventName = '';
        this.eventLocation = '';
        this.eventsList = [];
    }
    
    @action.bound
    onChangeEventName(event){
        this.eventName = event.target.value;
    }
    
    @action.bound
    onChangeEventLocation(event){
        this.eventLocation = event.target.value;
    }
    
    @action.bound
    onAddEvent(){
        if(this.eventName !== '' && this.eventLocation != ''){
            const id = this.eventsCount + 1;
            const eventModel = new EventModel({id,eventName:this.eventName,eventLocation:this.eventLocation,isUpdate:false});
            this.eventsList.push(eventModel);
            this.eventName = '';
            this.eventLocation = '';
        }
        else{
            alert("Input fields shouldn't be empty!");
        }
    }
    
    @action.bound
    onDeleteEvent(eachEvent){
        const index = this.eventsList.indexOf(eachEvent);
        this.eventsList.splice(index,1);
    }
    
    @computed get eventsCount(){
        return this.eventsList.length;
    }
}

const eventStore = new EventStore();
export default eventStore;