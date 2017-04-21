require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"

# Include the gems
# Work on the static pages
  # Home pages
  # About pages
# Create the database itself
# Add a table into the database
  # Make a migration
# Insert a few records into that table
  # Seeding the database (adding dummy data)
# READ STEP - /animals
# CREATE STEP - /animals/new
# UPDATE STEP - /animals/:id/edit
# DELETE STEP - /animals/:id/delete

get "/" do
  binding.pry
  
  erb(:home) # Go get views/home.erb
end

get "/about" do
  erb(:about)
end
