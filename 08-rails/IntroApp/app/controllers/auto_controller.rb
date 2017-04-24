class AutoController < ApplicationController
  def color
    @color = params["color"]
  end

  def car_details
    @hp = params["hp"]
    @torque = params["torque"]
    # raise "hell"
    #   # Bring up a console in the browser that has access to variables, params etc.
    #   # Kind of like binding.pry
  end
end
