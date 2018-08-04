import assign from 'object-assign';
import { Dispatcher } from 'flux';

export default ({ actionType, state }) => {
  console.log({ actionType, state });
  return null;
};

export const AppDispatcher = assign(new Dispatcher(), {
  handleViewAction(action) {
    const payload = {
      source: 'VIEW_ACTION',
      action,
    };
    this.dispatch(payload);
  },
});

export const handleD3Payload = (actionType, payload) =>
  AppDispatcher.handleViewAction({
    actionType,
    payload,
  });
