require "pry"
require "sinatra"
require "sinatra/reloader"

# Create our first literal route
  # Route is an HTTP Method (or verb) paired with a Path

# localhost:4567
# localhost:4567/

get "/" do
  "Hello World"
end

# localhost:4567/about

get "/about" do
  "I am Bill Murray"
end

# GET localhost:4567/hi

get "/hi" do
  "Hi there"
end

get "/hello" do
  "Hello there"
end

# GET localhost:4567/hi/Groucho

get "/hi/Groucho" do
  "Hi Groucho"
end

get "/hi/Harpo" do
  "Hi Harpo"
end

get "/hi/Zeppo" do
  "Hi Zeppo"
end

get "/hack" do
  "<h1>You must be on localhost:4567/hack. Good luck, we are the best at security</h1>"
end

get "/addTwoNumbers" do
  first_num = Random.rand( 10 )
  second_num = Random.rand( 10 )
  result = first_num + second_num

  "#{first_num} + #{second_num} = #{result}"
end

# Dynamic Route
  # An HTTP Method
    # GET, POST, PUT, DELETE ...
  # A URL Path Matching Pattern
    # It looks roughly like ...

# I want to be able to say hi to anyone
get "/hello/:name" do
  name = params["name"]
  "Hi there, #{name}"
end

# /add/5/10
# /add/1242/129412
get "/add/:first_num/:second_num" do
  first_num = params["first_num"].to_i
  second_num = params["second_num"].to_i
  result = first_num + second_num

  "#{first_num} + #{second_num} = #{result}"
end

# /multiply/4/1919
# /multiply/12412/1298482

get "/multiply/:x/:y" do
  "#{params['x']} * #{params['y']} = #{params['x'].to_i * params['y'].to_i}"
end

get "/colour/:c" do
  colour = params["c"]
  "<h1 style='color: #{colour}'>The colour #{colour}</h1>"
end
