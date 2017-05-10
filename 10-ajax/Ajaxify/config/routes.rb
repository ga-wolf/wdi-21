Rails.application.routes.draw do
  root 'pages#home'
  get '/dashboard' => 'pages#dashboard'

  # AJAX Routes...
  get '/fortune' => 'pages#fortune'
  get '/uptime' => 'pages#uptime'
  get '/lotto_numbers' => 'pages#lotto_numbers'

  get '/dynamic_messages' => 'messages#dynamic'
  get '/messages' => 'messages#index'
  get '/messages/:id' => 'messages#show'

end
