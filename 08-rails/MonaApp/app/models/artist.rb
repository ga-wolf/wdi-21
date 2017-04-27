class Artist < ApplicationRecord
  has_many :works
  # We know that work has the foreign key artist_id
  # This line defines a method for us
  # That method basically says find all of the works that a given artist has created
    # An Artist has an ID, go find all of the works with a matching artist_id
end
