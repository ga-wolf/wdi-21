class Work < ApplicationRecord
  belongs_to :artist, optional: true
  # Define a method for us
    # Do we have an appropriate foreign key?
      # Do we have artist_id ?
    # If we do have artist_id, go find the artist with that ID
end
