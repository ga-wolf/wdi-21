Rails.application.routes.draw do

  root "pages#home"
  # root to: "pages#home"
  # get "/" => "pages#home"

                # controller#action
  get "/home" => "pages#home"

end
