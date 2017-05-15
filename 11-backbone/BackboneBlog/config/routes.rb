Rails.application.routes.draw do

  resources :posts
  root "pages#app"
  get "/app" => 'pages#app'

end
