import EventService from '../services/EventService';

export const state = () => ({
    events: [],
    event: {}
})

export const mutations = {
    setEvents(state, events) {
        state.events = events;
    },
    setEvent(state, event) {
        state.event = event;
    }
}

export const actions = {
    fetchEvents({ commit }) {
        return EventService.getEvents().then(response => {
            commit('setEvents', response.data)
        })
    },
    fetchEvent({ commit }, id) {
        return EventService.getEvent(id).then(response => {
            commit('setEvent', response.data)
        })
    }
}