class Card < ApplicationRecord
  belongs_to :deck
  validate :question, :answer, presence: true
end
