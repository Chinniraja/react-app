import {observable,action} from 'mobx';
class EventModel{
    @observable id
    @observable eventName
    @observable eventLocation
    @observable isUpdate
    
    constructor(props){
        this.id = props.id;
        this.eventName = props.eventName;
        this.eventLocation = props.eventLocation;
        this.isUpdate = props.isUpdate;
    }
    @action.bound
    onUpdateEventName(event){
        this.eventName = event.target.value;
    }
    
    @action.bound
    onUpdateEventLocation(event){
        this.eventLocation = event.target.value;
    }
    
    @action.bound
    isEventUpdate(){
        if(this.eventName !== '' && this.eventLocation !== ''){
            this.isUpdate = this.isUpdate ? false : true;
        }
        else {
            alert("Input fields shouldn't be empty!");
        }
    }
}

export default EventModel;