import {setElementVisibilityTo, setElementVisibilityToImmer, setElementVisibilityToImmer2, setElementVisibilityToImmer2Default, setElementVisibilityToImmer3Default} from "./index";

describe('immutability test', () => {
  test('setElementVisibilityTo should return new state', () => {
    const state = {
      itemsSettings: {
        1: {
          visible: true,
        },
        2: {
          visible: false,
        }
      }
    };

    const newState = setElementVisibilityTo(state, 2, true);

    expect(state === newState).toBe(false);
    expect(state.itemsSettings === newState.itemsSettings).toBe(false);
    expect(state.itemsSettings[2] === newState.itemsSettings[2]).toBe(false);
    expect(state.itemsSettings[2].visible === newState.itemsSettings[2].visible).toBe(false);
    expect(newState.itemsSettings[2].visible).toBe(true);
  });

  test('setElementVisibilityToImmer should return new state', () => {
    const state = {
      itemsSettings: {
        1: {
          visible: true,
        },
        2: {
          visible: false,
        }
      }
    };

    const newState = setElementVisibilityToImmer(state, 2, true);

    expect(state === newState).toBe(false);
    expect(state.itemsSettings === newState.itemsSettings).toBe(false);
    expect(state.itemsSettings[2] === newState.itemsSettings[2]).toBe(false);
    expect(state.itemsSettings[2].visible === newState.itemsSettings[2].visible).toBe(false);
    expect(newState.itemsSettings[2].visible).toBe(true);
  });

  test('setElementVisibilityToImmer2 should return new state', () => {
    const state = {
      itemsSettings: {
        1: {
          visible: true,
        },
        2: {
          visible: false,
        }
      }
    };

    const newState = setElementVisibilityToImmer2(state, 2, true);

    expect(state === newState).toBe(false);
    expect(state.itemsSettings === newState.itemsSettings).toBe(false);
    expect(state.itemsSettings[2] === newState.itemsSettings[2]).toBe(false);
    expect(state.itemsSettings[2].visible === newState.itemsSettings[2].visible).toBe(false);
    expect(newState.itemsSettings[2].visible).toBe(true);
  });

  test('setElementVisibilityToImmer2Default should return new state', () => {
    const newState = setElementVisibilityToImmer2Default(undefined, 2, true);

    expect(newState.itemsSettings[2].visible).toBe(true);
  });

  test('setElementVisibilityToImmer3Default should return new state', () => {
    const state = {
      itemsSettings: {
        1: {
          visible: true,
        },
        2: {
          visible: false,
        }
      }
    };

    const newState = setElementVisibilityToImmer3Default(state, 2, false);

    expect(state === newState).toBe(true);
    expect(state.itemsSettings === newState.itemsSettings).toBe(true);
    expect(state.itemsSettings[2] === newState.itemsSettings[2]).toBe(true);
    expect(state.itemsSettings[2].visible === newState.itemsSettings[2].visible).toBe(true);
    expect(newState.itemsSettings[2].visible).toBe(false);
  });
});
