Rails.application.routes.draw do
  # For a given route (an HTTP Method paired with a path)
    # What controller do I use?
    # What action do I run?

               # "controller#action"
  get "/home" => "pages#home"

    # For a GET request to /home
      # I want to go into the pages_controller.rb
      # I want to run the home method defined in PagesController
      # I want to load the pages home.html.erb

  # In the case that someone makes a GET request to /about, I want to run the pages controller about method
  get "/about" => "pages#about"

  get "/random" => "pages#random"

  get "/auto/:color" => "auto#color"
    # params = { "color" => ______ }
  get "/auto/:hp/:torque" => "auto#car_details"

  get "/calc/:first_num/:operation/:second_num" => "calc#arithmetic"
end
