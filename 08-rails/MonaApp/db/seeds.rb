# Give us a starting point
# Make sure we can talk with the database
# Eventually, we will test associations here

Artist.destroy_all

joan = Artist.create({
  name: "Joan Miro",
  nationality: "Spanish",
  dob: "1893/04/20",
  period: "20th Century",
  image: "http://www.joan-miro.net/images/joan-miro.jpg"
})
salvador = Artist.create({
  name: "Salvador Dali",
  nationality: "Spanish",
  dob: "1904/05/11",
  period: "20th Century",
  image: "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
})

puts "Artist Count: #{ Artist.all.count }"

Work.destroy_all

w1 = Work.create({
  title: "The Flight of the Dragonfly In Front of the Sun",
  year: '1968',
  medium: 'Oil on Canvas',
  style: 'Abstract',
  image: 'http://www.joan-miro.net/images/paintings/the-flight-of-the-dragonfly-in-front-of-the-sun.jpg',
  artist_id: joan.id
})
w2 = Work.create({
  title: "The Persistence of Memory",
  year: "1931",
  medium: "Oil on Canvas",
  style: "Abstract",
  image: "https://uploads5.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg",
  artist_id: salvador.id
})
  # Use Salvador's Primary Key to serve as The Persistence of Memory's Foreign Key

w3 = Work.create({
  title: "Swans Reflecting Elephants",
  year: "1937",
  medium: "Oil on Canvas",
  style: "Surrealism"
})
w3.artist = salvador
w3.save

puts "Work Count: #{Work.all.count}"

# To set up a has_many and belongs_to relationship...

# - What Model has_many?
# - What Model belongs_to?
# - Where does the foreign key lie (whichever side belongs_to)
# - Add the foreign key to the table
# - Tell Active Record about the associations (write down the association in the model)

# TEST ASSOCIATIONS

# For a given artist, get me a list of their works - ` a.works `
# For a given work, get me the artist that created it - ` w.artist `

p "Work 2 Artist: #{w2.artist}"
p "Work 2 Artist Name: #{w2.artist.name}"

p "Work 3 Artist: #{w3.artist}"
p "Work 3 Artist Name: #{w3.artist.name}"

p "Artist 2 Works: #{salvador.works}"
p "Artist 2 Works Count: #{salvador.works.count}"
p "Artist 2 First Work Name: #{salvador.works.first.title}"
