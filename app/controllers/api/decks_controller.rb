class API::DecksController < ApplicationController
  before_action :set_deck, only: [:show, :update, :destroy]

  def index
    @decks = Deck.all
    render json: @decks, status: 200
  end

  def show
    render json: @deck, status: 200
  end

  def create
    @deck = Deck.new(deck_params)
    if @deck.save
      render json: @deck, status: 200
    else
      render json: { errors: @deck.errors }, status: 422
    end
  end

  def update
    @deck.update(deck_params)
    if @deck.save
      render json: @deck, status: 200
    else
      render json: { errors: @deck.errors }, status: 422
    end
  end

  def destroy
    @deck.destroy
  end

  private

  def deck_params
    params.require(:deck).permit(:name, :subject)
  end

  def set_deck
    @deck = Deck.find(params[:id])
  end
end