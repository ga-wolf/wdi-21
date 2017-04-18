# If Conditional
  # if some_condition
  #   # Thing to do
  # end

  # No (), no {}
  # else if is now called elsif
  # In our conditions, always use ==, not ===
  # do_something if some_condition
    # Inline Conditionals

number = 100
if number > 13
  puts "#{number} is bigger than 13"
end

name = "Chico"
if name == "Groucho"
  puts "You are Groucho"
elsif name == "Chico"
  puts "You are Chico"
else
  puts "You are someone else"
end

puts "42 is bigger than 13" if 42 > 13

marx_brother = "Groucho"
puts "You were great in Duck Soup" if marx_brother == "Groucho"

name = "Harpo"
if name != "Groucho"
  puts "That is a shame"
end

# The Ruby way is to not use negation
unless name == "Groucho"
  puts "That is a shame"
end

puts "That is a shame" unless name == "Groucho"

x = 1
unless x > 2
  puts "#{x} is smaller than 2 (or equal)"
else
  puts "#{x} is larger than 2"
end

hour = 15
case
when hour < 12
  puts "Good Morning"
when hour > 12 && hour < 17
  puts "Good Afternoon"
else
  puts "Good Evening"
end



name = "Harpo"
case name
when "Harpo"
  puts "You are Harpo"
when "Gummo"
  puts "You are Gummo"
when "Chico"
  puts "You are Chico"
else
  puts "You are someone else"
end

marx_bro = "Gummo"
case marx_bro
when "Harpo" then puts "You are Harpo"
when "Groucho" then puts "You were great in Duck Soup"
when "Gummo" then puts "That mirror scene, wow"
end


name = "Matt"

# We want to create a var called role. When name is Kane, make it Teacher's Assistant, when it is Wolf, make it Random Dude, when it is Hayley, make it Course Producer, otherwise, make it student
role =  case name
        when "Kane" then "Teacher's Assistant"
        when "Wolf" then "Random Dude"
        when "Hayley" then "Course Producer"
        when "Olivia" then "Student Experience Coordinator"
        else
          "Student"
        end

p role

puts true && true # => true
puts true && false # => false

puts true || false # => true
puts false || false # => false

puts 42 > 13 && 50 < 60 # => true
puts 42 < 13 || true # => true

puts !false # => true
puts !true  # => false
