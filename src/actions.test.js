import * as actions from './actions';

describe ('New Game', () => {
    it('should return the action', () => {
        const action = actions.newGame();
        expect(action.type).toEqual(actions.NEW_GAME);
        expect(action.correctAnswer).toBeGreaterThan(0);
        expect(action.correctAnswer).toBeLessThanOrEqual(100);
    })
})

describe ('Make guess', () => {
    it('should return the action', () => {
        const guess = 23;
        const action = actions.makeGuess(guess);
        expect(action.type).toEqual(actions.MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    })
})

describe ('Toggle info modal', () => {
    it('should return the action', () => {
        const action = actions.toggleInfoModal();
        expect(action.type).toEqual(actions.TOGGLE_INFO_MODAL);
    })
})