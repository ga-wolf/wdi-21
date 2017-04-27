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
  image: 'http://www.joan-miro.net/images/paintings/the-flight-of-the-dragonfly-in-front-of-the-sun.jpg'
})
w2 = Work.create({
  title: "The Persistence of Memory",
  year: "1931",
  medium: "Oil on Canvas",
  style: "Abstract",
  image: "https://uploads5.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg"
})

puts "Work Count: #{Work.all.count}"
