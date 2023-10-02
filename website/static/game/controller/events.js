import { k } from "../../game.js"

let event_listener = new EventTarget();

function post_event(name){
    console.log("[EVENT] Event: " + name);
    event_listener.dispatchEvent(new CustomEvent(name));
}
function call_event(event, callback){
    event_listener.addEventListener(event, callback);
}
function remove_all_events(){
    event_listener = new EventTarget();
}
const events = {
    emit: post_event,
    listen: call_event,
    clear: remove_all_events
}

export default events;