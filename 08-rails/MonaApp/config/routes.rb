Rails.application.routes.draw do

  resources :works
    # Generate a full set of CRUD urls for the works table

  # CREATE
  get '/artists/new' => 'artists#new'
  post '/artists' => 'artists#create'

  # READ
  get '/artists' => 'artists#index'
  get '/artists/:id' => 'artists#show'

  # UPDATE
  get '/artists/:id/edit' => 'artists#edit'
  patch '/artists/:id' => 'artists#update'

  # DELETE
  delete '/artists/:id' => 'artists#destroy'

end
