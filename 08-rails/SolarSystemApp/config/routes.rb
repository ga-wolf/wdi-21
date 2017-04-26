Rails.application.routes.draw do

  root "pages#home"
  # root to: "pages#home"
  # get "/" => "pages#home"

                # controller#action
  get "/home" => "pages#home"

  # CRUD System for planets

  get '/planets' => 'planets#index'
  get '/planets/new' => 'planets#new'
  get '/planets/:id' => 'planets#show'

end
