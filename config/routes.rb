Rails.application.routes.draw do
  root 'posts#index'
  devise_for :users
 
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 resources :users, only: [:show,:index]
 resources :posts, only: [:index,:show,:create,:destroy] do
   resources :photos, only: [:create]
   resources :comments, only: [:index,:create,:destroy], shallow: true 
   resources :likes, only: [:create, :destroy], shallow: true
  resources :bookmarks, only: [:create, :destroy], shallow: true
 end
end
