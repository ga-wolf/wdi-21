class ArtistsController < ApplicationController
  def index
    # Do I need to speak to the database?
    # Do I need to pass any information to the views? (as instance variables)
    @all_artists = Artist.all
  end

  def show
    @artist = Artist.find_by(id: params['id'])
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create( artist_strong_params() )
    redirect_to "/artists/#{artist.id}"
  end

  def edit
  end

  private
    def artist_strong_params
      params.require(:artist).permit(:name, :nationality, :dob, :image, :period)
    end
end
