Rails.application.routes.draw do
  namespace :api do
    resources :decks, only: [:index, :show, :create, :update, :destroy] do
      resources :cards, only: [:index, :create, :destroy]
    end
  end
end
