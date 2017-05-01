class SessionController < ApplicationController
  def new
  end

  def create
    email = params["email"]
    password = params["password"]

    user = User.find_by(email: email)
    # If the user exists and you provided the right password
    if user.present? && user.authenticate(password)

      session[:user_id] = user.id
      redirect_to "/users"

    else
      flash[:login_error] = "The password or email was incorrect"
      # Show the login form again (potentially with a temporary message)
      render :new # Show the new form
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to "/users"
  end
end
