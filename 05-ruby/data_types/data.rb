# Print to the console
  # puts - on a new line
    # Use this most of the time
  # print - can be on the same line
  # p - programmer print
    # Use this for debugging

# puts( "Hello World" )
# puts "Hello WDi"
#
# print( "Hello DSi" )
# print "Hello UXDi"
#
# p("Hello Groucho")
# p "Hello Harpo"

# puts "Double Quotes"
# puts 'Single Quotes'
#
# name = "Gilberto"
# puts "Hello " + name # concatenation
# puts "Hello #{name}" # interpolation
#
# puts 'Hello #{name}' # This won't work!
#
# puts "Favourite Number: #{84 / 2}"
#
# p "Hello".methods.sort.length
#
# # NUMBERS IN RUBY
#
# puts 1 + 2
# puts 1 - 3
# puts 1 * 6    # multiplication
# puts 1 / 8    # division
# puts 2 ** 6   # to the power of - exponent operator
# puts 10 % 4   # modulo or modulus operator (remainder)
# puts 1242194921849218
# puts 1.3 * 14.2
# puts 1_000_000 # The underscores are ignored!
#
# puts "4 to the power of 8 is #{ 4 ** 8 }"
#
# puts 10 < 6
# puts 6 >= 3
# puts 10 == 10 # Always use double equals
# puts 10 === 10

# Variables in Ruby
  # no var keyword
  # no semicolons
  # snake_case not camelCase

this_is_ruby = true
this_is_a_string = "Yes, it is"

this_is_a_num = 41
this_is_a_num = this_is_a_num + 2
this_is_a_num -= 1 # syntactic sugar (+=, -=, *=, /=)

puts this_is_a_num

empty_arr = []
empty_hash = {} # Similar to JS Objects

name = "Wolf"
company_name = "Whiskey Business"
puts "You can't wait for #{name}'s business, #{company_name}"

# Getting User Input
  # gets()
  # gets().chomp()
    # Much better (removes the \n (enter key) from the string)

# Ask the user for their name
puts "What is your first name? "
first_name = gets().chomp()

# Ask the user for their last name, and on the same line, I want them to be able to type their response. Store that in a variable called last name

print "What is your last name? "
last_name = gets.chomp

puts "Your full name is #{first_name.capitalize} #{last_name.capitalize()}"
