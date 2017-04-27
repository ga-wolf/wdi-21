Rails.application.routes.draw do

  # CREATE
  get '/artists/new' => 'artists#new'
  post '/artists' => 'artists#create'

  # READ
  get '/artists' => 'artists#index'
  get '/artists/:id' => 'artists#show'

  # UPDATE

  # DELETE

end
