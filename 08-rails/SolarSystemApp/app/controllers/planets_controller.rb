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

  def create
    planet = Planet.create( planet_params() )
    redirect_to "/planets"
  end

  def edit
    id = params["id"]
    @planet = Planet.find_by(id: id)
  end

  def update
    # I need to find the planet
    planet = Planet.find_by(id: params["id"])
    # I need to update the planet using strong params
    planet.update( planet_params )
    # I need to redirect to /planets/:id
    redirect_to "/planets/#{planet.id}"
  end

  def destroy
    # Find the Planet that I am interested in destroying
    planet = Planet.find_by(id: params["id"])
    # Somehow delete it
    planet.destroy
    # Redirect back to the list of all planets
    redirect_to "/planets"
  end

  private
    def planet_params
      # Strong Parameters || Whitelisting
      # A way to add params directly into the database by describing an appropriate structure
      params.require(:planet).permit(:name, :image, :orbit, :moons, :diameter)
    end
end
