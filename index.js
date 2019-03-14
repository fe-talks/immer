import produce from 'immer';

const data = [
  {id: 1, title: 'first'},
  {id: 2, title: 'second'},
];

export function setElementVisibilityTo(state, id, visibility) {
  // state.itemsSettings[id].visible = visibility;

  // const newState = {
  //   ...state,
  // };
  // newState.itemsSettings[id].visible = visibility;

  const newState = {
    ...state,
    itemsSettings: {
      ...state.itemsSettings,
      [id]: {
        ...state.itemsSettings[id],
        visible: visibility,
      }
    }
  };

  return newState;
}

export function setElementVisibilityToImmer(state, id, visibility) {
  const newState = produce(state, (draft) => {
    draft.itemsSettings[id].visible = visibility;
  });

  return newState;
}

export const setElementVisibilityToImmer2 = produce((state, id, visibility) => {
  state.itemsSettings[id].visible = visibility;

  return state;
});

export const setElementVisibilityToImmer2Default = produce((state, id, visibility) => {
  if (!state.itemsSettings[id]) {
    state.itemsSettings[id] = {};
  }

  state.itemsSettings[id].visible = visibility;

  return state;
}, {
  itemsSettings: {}
});

export const setElementVisibilityToImmer3Default = produce((state, id, visibility) => {
  if (!state.itemsSettings[id]) {
    state.itemsSettings[id] = {};
  }

  if (state.itemsSettings[id].visible !== visibility) {
    state.itemsSettings[id].visible = visibility;
  }

  return state;
}, {
  itemsSettings: {}
});

export const setElementVisibilityToImmerNonMod = produce((state, id, visibility) => {
  return 'some';
}, {
  itemsSettings: {}
});

export const setElementVisibilityToImmerNonMod2 = produce((state, id, visibility) => {
  if (state === 'default') {
    return 'some';
  }
}, 'default');

// Immer zwraca dokladnie ten sam obiekt jesli nie byl modyfikowany!
