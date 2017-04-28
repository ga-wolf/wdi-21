# Delete everything
Artist.destroy_all

# Create some stuff
pink = Artist.create(name: "Pink")
delta = Artist.create(name: "Delta Goodrem")
mnm = Artist.create(name: "Eminem")
spears = Artist.create(name: "Britney Spears")
seu = Artist.create(name: "Seu Jorge")
june = Artist.create(name: "June of 44")
mogwai = Artist.create(name: "Mogwai")
mercury = Artist.create(name: "The Mercury Program")
bill = Artist.create(name: "Bill Evans")
django = Artist.create(name: "Django Reinhardt")

# Make sure it worked (print out the Artist count)
puts "Artist Count: #{ Artist.count }"
puts "First Artist's Name: #{ Artist.first.name }"
puts "Django's Name: #{ django.name }"

artist_id = spears.id
puts "Britney: #{Artist.find_by(id: artist_id)}"

mnm.update( name: "Mnm" )
mnm.save()

nickelback = Artist.create( name: "Nickelback" )
nickelback.destroy


Song.destroy_all

s1 = Song.create(name: "Raise your Glass")
s1.artist = pink
s1.save

s2 = Song.create(name: "Funhouse", artist_id: pink.id)

s3 = Song.create(name: "Do you remember?", artist_id: delta.id)
  # Delta
s4 = Song.create(name: "Without Me")
s4.artist = mnm
s4.save
  # Eminem
s5 = Song.create(name: "Toxic", artist_id: spears.id)
  # Britney
s6 = Song.create(name: "Hit me baby", artist_id: spears.id)
  # Britney
s7 = Song.create(name: "All by Electricity", artist_id: june.id)
  # June of 44
s8 = Song.create(name: "Marianas Trench")
s8.artist = mercury
s8.save
  # The Mercury Program
s10 = Song.create(name: "Take me somewhere nice", artist_id: mogwai.id)
  # Mogwai
s11 = Song.create(name: "Problema Social", artist_id: seu.id)
  # Seu Jorge
s12 = Song.create(name: "Minor Swing", artist_id: django.id)
  # Django Reinhardt
s13 = Song.create(name: "The Blowers Daughter", artist_id: seu.id)
  # Seu Jorge

puts "Song Count: #{ Song.count }"

s13.update( name: "The Blower's Daughter || E Isso Ai" )
s13.save

s14 = Song.create(name: "Reminds me of you")
s14.destroy

# Associate Everything
# Test Associations

# For a couple of songs, print out the Artist
puts "Song 4 Artist: #{ s4.artist }"
puts "Song 13 Artist: #{ s13.artist }"
puts "Song 1 Artist: #{ s1.artist }"

# For a couple of songs, print out the associated Artist's name
puts "Song 6 Artist Name: #{ s6.artist.name }"
puts "Song 10 Artist Name: #{ s10.artist.name }"
puts "Song 1 Artist Name: #{ s1.artist.name }"

# For a couple of artists (Seu Jorge), print out the number of songs
puts "Pink Song Count: #{ pink.songs.count }"
puts "Seu Songs: #{ seu.songs }"

# For a couple of artists (Pink), loop through their songs and print out the names
pink.songs.each do |s|
  puts "Current Song Name: #{ s.name }"
end

seu.songs.each { |s| puts "Song Name: #{ s.name }" }

# Create a generic artist

# Figure out how you could easily create 100 songs
  # Song #1, Song #2, Song #3
  # Associate all of these songs to the generic artist

generic_artist = Artist.create( name: "Generic Artist" )

(1..100).to_a.each do |song_num|
  Song.create(name: "Song #{song_num}", artist_id: generic_artist.id)
end





Genre.destroy_all

g1 = Genre.create(name: "Metal")
g2 = Genre.create(name: "Rap")
g3 = Genre.create(name: "Choir")
g4 = Genre.create(name: "Jazz")
g5 = Genre.create(name: "Opera")
g6 = Genre.create(name: "Pop")

g6.songs << s1
g6.songs << s2
g6.songs << s5 << s6


g7 = Genre.create(name: "Electronic")
g7.songs << s1 << s2 << s5 << s6

puts "Genre Count: #{ Genre.count }"

s12.genres << g4
s4.genres << g2 << g6

# some_genre.songs
# some_genre.songs.count
# some_genre.songs.each

# some_song.genres
# some_song.genres.count
# some_song.genres.each

puts "G6 Song Count: _____"

# Loop through G7 songs, and print out the Song Names

puts "S12 Genres: _____"

# Loop through S12 genres, and print out the Genre Names
