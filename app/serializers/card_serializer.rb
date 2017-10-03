class CardSerializer < ActiveModel::Serializer
  attributes :id, :question, :answer, :deck_id
end
