class ArtistsController < ApplicationController
  def index
    # Do I need to speak to the database?
    # Do I need to pass any information to the views? (as instance variables)
    @all_artists = Artist.all
  end

  def show
    @artist = Artist.find_by(id: params['id'])
    # raise "hell"
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create( artist_strong_params() )
    redirect_to "/artists/#{artist.id}"
  end

  def edit
    @artist = Artist.find_by(id: params["id"])
      # Prefill values
      # Reuse the new form
  end

  def update
    # Use the URL to find the right Artist
    artist = Artist.find_by(id: params["id"])
    # Enforce a structure of the params, and restrict the values that can be sent. Add that into the database
    artist.update( artist_strong_params() )
    # Make a new GET request to /artists/:id
    redirect_to "/artists/#{artist.id}"
  end

  def destroy
    artist = Artist.find_by(id: params["id"])
    artist.destroy
    redirect_to "/artists"
  end

  private
    def artist_strong_params
      params.require(:artist).permit(:name, :nationality, :dob, :image, :period)
    end
end
