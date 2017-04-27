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
