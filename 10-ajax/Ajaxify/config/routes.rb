Rails.application.routes.draw do
  root 'pages#home'
  get '/dashboard' => 'pages#dashboard'

  get '/fortune' => 'pages#fortune'
end
