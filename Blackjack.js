const Deck = require('./Deck')

class Hand {
    constructor(dealer, userId) {
        this.dealer = dealer
        this.userId = userId
        this.cards = []
        this.cardNames = []
        this.handValue = 0
    };

    draw(deck, amount) {
        if (deck.cards.length < amount) {
            console.log("Can't draw that amount of cards, deck doesn't contain enough cards.")
        }
        else {
            for (let i = 0; i < amount; i++) {
                this.cards.push(deck.cards.pop())
            }
            this.updateCardNames()
        }
    };

    updateCardNames() {
        this.cardNames = []
        for (let i = 0; i < this.cards.length; i++) {
            this.cardNames.push(`${this.cards[i].valueName} of ${this.cards[i].suiteName}s`)
        }
    }

    updateHandValue() {
        this.handValue = 0
        for (let i = 0; i < this.cards.length; i++) {
            this.cardNames.push(`${this.cards[i].valueName} of ${this.cards[i].suiteName}s`)
        }
    }
};

shoe = new Deck.Deck(3);
shoe.shuffle(2);

hand = new Hand(false, 1);
hand.draw(shoe, 2);
console.log(hand.cardNames);


