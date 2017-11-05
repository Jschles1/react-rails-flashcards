class AddHighScoreToDecks < ActiveRecord::Migration[5.1]
  def change
    add_column :decks, :high_score, :float, default: 0
  end
end
