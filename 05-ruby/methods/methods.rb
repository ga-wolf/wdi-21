# Methods
  # They are similar to JS functions
  # Parameters are mostly required
    # But you can also set default parameters to get around it
  # Implicit Return
    # The last line, when evaluated, is always returned

require "pry" # Include the gem pry in this file

# def method_name( parameters, parameters )
#   # Code to execute
# end

def hello
  puts "Hello World"
end

hello()
hello # Optional Parentheses

def specific_hello( name )
  puts "Hello #{name}"
end

specific_hello("Roget")
specific_hello "Geralt"

def flexible_greeting( name = "World" )
  "Greetings, #{name}"
end

flexible_greeting( "Jane" )
flexible_greeting "Serge"
flexible_greeting()
flexible_greeting

def add_two_numbers( x = 0, y = 0 )
  x + y
end

def greeting( name = "World" )
  # Return keywords are available
    # They are always the last line that is run
  # return "I don't feel like talking"
  "Hello #{name}"
end

p greeting("Jane")
p greeting()



def allowed( age = 0 )
  # if age >= 18
  #   return true
  # else
  #   return false
  # end

  return age >= 18
  # age >= 18
end

allowed( 16 )
allowed( 25 )
