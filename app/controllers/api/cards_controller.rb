class API::CardsController < ApplicationController
  before_action :set_deck

  def index
    render json: @deck.cards, status: 200
  end

  def create
    @card = @deck.cards.create(card_params)
    if @card.save
      render json: @card, status: 201
    else
      render json: { errors: @card.errors }, status: 422
    end
  end

  private

  def card_params
    params.require(:card).permit(:question, :answer, :deck_id)
  end

  def set_deck
    @deck = Deck.find(params[:id])
  end
end