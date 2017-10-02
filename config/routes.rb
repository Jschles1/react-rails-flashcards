Rails.application.routes.draw do
  namespace :api do
    resources :decks, only: [:index, :show, :create, :update, :destroy]
  end
end
