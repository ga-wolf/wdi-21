class PlanetsController < ApplicationController
  def index
    @all_planets = Planet.all
  end

  def show
    id = params["id"]
    @planet = Planet.find_by(id: id)
    # @planet = Planet.find(id)
  end

  def new
  end

  def edit
  end
end
