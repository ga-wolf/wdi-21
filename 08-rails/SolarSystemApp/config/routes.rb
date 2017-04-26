Rails.application.routes.draw do

  root "pages#home"
  # root to: "pages#home"
  # get "/" => "pages#home"

                # controller#action
  get "/home" => "pages#home"

  # CRUD System for planets

  get '/planets' => 'planets#index'

  get '/planets/new' => 'planets#new' # shows the form
  post '/planets' => 'planets#create' # handles the submission of the form


  get '/planets/:id' => 'planets#show'

  get '/planets/:id/edit' => 'planets#edit'
  post '/planets/:id' => 'planets#update'

  delete '/planets/:id/delete' => 'planets#destroy'

end
