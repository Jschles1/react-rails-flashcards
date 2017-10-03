class API::CardsController < ApplicationController
  before_action :set_deck

  def index
    render json: @deck.cards, status: 200
  end

  private

  def set_deck
    @deck = Deck.find(params[:id])
  end
end