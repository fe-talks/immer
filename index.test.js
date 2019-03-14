import {
  setElementVisibilityTo,
  setElementVisibilityToImmer,
  setElementVisibilityToImmer2,
  setElementVisibilityToImmer2Default,
  setElementVisibilityToImmerNonMod, setElementVisibilityToImmerNonMod2
} from "./index";

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

  test('setElementVisibilityToImmer2Default should not return new state when no changes', () => {
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

    const newState = setElementVisibilityToImmer2Default(state, 2, false);

    expect(state === newState).toBe(true);
    expect(state.itemsSettings === newState.itemsSettings).toBe(true);
    expect(state.itemsSettings[2] === newState.itemsSettings[2]).toBe(true);
    expect(state.itemsSettings[2].visible === newState.itemsSettings[2].visible).toBe(true);
    expect(newState.itemsSettings[2].visible).toBe(false);
  });

  test('setElementVisibilityToImmerNonMod should return new state', () => {
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

    const newState = setElementVisibilityToImmerNonMod(state, 2, false);
    expect(newState).toBe('some');

    const newState2 = setElementVisibilityToImmerNonMod(undefined, 2, false);
    expect(newState2).toBe('some');
  });

  test('setElementVisibilityToImmerNonMod2 should return new state', () => {
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

    const newState = setElementVisibilityToImmerNonMod2(state, 2, false);
    expect(newState).toBe(state);

    const newState2 = setElementVisibilityToImmerNonMod2(undefined, 2, false);
    expect(newState2).toBe('some');
  });
});
