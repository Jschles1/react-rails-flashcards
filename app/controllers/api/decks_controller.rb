class API::DecksController < ApplicationController
  before_action :set_deck, only: [:show, :update, :destroy]

  def index
    @decks = Deck.all
    render json: @decks, status: 200
  end

  private

  def deck_params
    params.require(:deck).permit(:name)
  end

  def set_deck
    @deck = Deck.find(params[:id])
  end
end