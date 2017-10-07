class Deck < ApplicationRecord
  has_many :cards, dependent: :destroy
  validates :name, :subject, presence: true
end
