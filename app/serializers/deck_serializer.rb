class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :high_score
end
