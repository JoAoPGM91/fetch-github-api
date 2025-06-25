import { baseUrl, eventsQuantity } from "../variables.js";

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/received_events?per_page=${eventsQuantity}`)
    const data = await response.json()

    const filteredEvents = data
    .filter(event => event.type === "PushEvent" || event.type === "CreateEvent")
    .slice(0, 10)
    return await filteredEvents
}

export { getEvents }