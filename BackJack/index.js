function hitOrStay(hole, next) {
    const cardValues = {
        A: 11,
        T: 10,
        J: 10,
        Q: 10,
        K: 10,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
    };

    function calculateTotal(cards) {
        let total = cards.reduce((sum, card) => sum + cardValues[card], 0);
        let aces = cards.filter((card) => card === 'A').length;

        while (total > 21 && aces > 0) {
            total -= 10;
            aces--;
        }

        return total;
    }

    const initialTotal = calculateTotal(hole);

    const isSoft17 = initialTotal === 17 && hole.includes('A');

    let action = 'stay';
    if (initialTotal < 17 || isSoft17) {
        action = 'hit';
    }

    let finalScore = initialTotal;
    if (action === 'hit') {
        finalScore = calculateTotal([...hole, next]);
    }

    return [action, finalScore];
}
