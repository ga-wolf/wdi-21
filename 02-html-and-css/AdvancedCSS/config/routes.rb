Rails.application.routes.draw do

  # localhost:3000 || localhost:3000/
  root 'pages#home'

  # localhost:3000/home
  get '/home' => 'pages#home'

  get '/scss' => 'pages#scss_page'

end
