let event_listener = new EventTarget();

function post_event(name){
    // console.log("[EMMIT] Event: " + name);
    event_listener.dispatchEvent(new CustomEvent(name));
}
function call_event(event, callback){
    event_listener.addEventListener(event, callback);
}
function remove_all_events(){
    event_listener = new EventTarget();
}
function remove_event(event, callback){
    // console.log("[EVENT] Event removed: " + event);
    event_listener.removeEventListener(event, callback);
}

const events = {
    emit: post_event,
    listen: call_event,
    clear: remove_all_events,
    remove: remove_event
}

export default events;