class AddSubjectToDecks < ActiveRecord::Migration[5.1]
  def change
    add_column :decks, :subject, :string
  end
end
