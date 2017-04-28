class Song < ApplicationRecord
  belongs_to :artist, optional: true
  # You can create a song, even if it isn't associated with an artist to begin with
  has_and_belongs_to_many :genres
  # I know that there is a table called genres_songs
    # I know that that table is keeping track of genre_id and song_id
    # I want to be able to call .genres on any given song
      # Use the Song's ID to get all of the records in genres_songs where song_id is equal to the Song's ID
      # Then use all of the genre_ids from those records to return all of the actual genres
end
