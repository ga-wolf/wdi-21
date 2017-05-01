Rails.application.routes.draw do

  get '/login' => 'session#new'
  post '/login' => 'session#create'

  resources :users

end
