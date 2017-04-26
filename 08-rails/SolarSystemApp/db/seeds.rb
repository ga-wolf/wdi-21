# Seeding the Database
  # Generating dummy data
  # Giving you a starting point (making sure you have user accounts etc.)
  # It is also a way to test models, associations etc.
  # To run this: ` rails db:seed `

puts "Adding some dummy data..."

# Make sure that there are no duplicates

Planet.destroy_all

# Create some records

earth = Planet.create(name: "Earth", orbit: 1, moons: 1, diameter: 12756)
mars = Planet.create(name: "Mars", orbit: 1.5, moons: 2, diameter: 6779)
venus = Planet.create(name: "Venus", orbit: 0.7, moons: 0, diameter: 12104)
jupiter = Planet.create(name: "Jupiter", orbit: 3.7, moons: 7, diameter: 139822)

neptune = Planet.new
neptune.name = "Neptune"
neptune.orbit = 8.6
neptune.moons = 3
neptune.diameter = 49244
neptune.save

# Make sure it worked

puts "You have #{Planet.all.count} planets in your database"
