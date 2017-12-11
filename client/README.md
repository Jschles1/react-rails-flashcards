## React Flashcards

### Introduction

This single page application is built with a React-Redux front-end with a Rails API back-end. It allows users to create a deck of flashcards with a topic of their choosing. Users can then quiz themselves with their chosen deck to see how many questions they can answer correctly.

### Usage

clone this repo and install the needed gems:

```
$ bundle install
```

Next, migrate the database:

```
$ rails db:migrate
```

Now run the app using:

```
$ rake start
```

### Instructions

To add to your list of decks, fill out the form fields of "Deck Name" and "Subject", and click "Create Deck".

Click the "My Decks" button on the navbar to see your current list of decks. To remove a workout from the list, click the "Delete Deck" button of the deck you want to remove.

To see the list of cards in a particular deck, click that deck's "View Cards" button. To add a card to the deck, fill out the form fields of "Question" and "Answer" on the bottom of the page and click "Add Card". Click the "Delete Card" button to delete the selected card from the deck.

To quiz yourself on the cards in a particular deck, click the "Quiz Yourself" button on the navbar. You will then be given a list of decks to select from, where you can click "Start Quiz" to begin the quiz. During the quiz, when you think you know the answer, click "Show Answer". Then, you can choose between clicking "Correct" and "Incorrect" based on whether your answer was correct. At the end of the quiz, you will be presented with a percentage score of how well you did.

## Contributing

Bug reports and pull requests are welcome on GitHub at [this project's repository][workout-planner]. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

This Web Application is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).