Rails.application.routes.draw do
  resources :songs
  resources :playlists
  root to: 'visitors#index'
  devise_for :users
  resources :users
end
