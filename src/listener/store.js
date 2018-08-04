import assign from 'object-assign';
import { EventEmitter } from 'events';
import { AppDispatcher } from './index';

const CHANGE_EVENT = 'change';
const event = (store, action) => {
  store.eventName = action.actionType;
};

export const storeData = assign({}, EventEmitter.prototype, {
  actionDistributor: action => ({
    events: event(eventDetails, action),
  }),
  getEventData: () => eventDetails.eventName,
  emitChange: () => {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },
});

const eventDetails = {
  eventName: '',
};

AppDispatcher.register(payload => {
  const { action } = payload;
  storeData.actionDistributor(action);
  storeData.emit(CHANGE_EVENT);
  return true;
});
