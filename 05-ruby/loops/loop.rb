# while some_condition
#   # Some code to execute
# end

# while true
#   puts "This isn't that bad of an idea"
# end
# Infinite loops aren't as bad as JS, CTRL + C is to quit

# Loops
  # Starting Point
  # Increment or a Step
  # End Condition

# i = 0
# while i <= 5
#   puts "I: #{i}"
#   i += 1
# end
#
# x = 5
# while x >= 1
#   puts "X: #{x}"
#   x -= 1
# end

# countdown = 5
# # Until the condition evaluates to true, keep running it
# until countdown == 0
#   puts countdown
#   countdown -= 1
# end
# puts "Blast off!"

# ITERATORS

# 5.times do |i|
#   puts "This happened: #{i}"
# end
#
# 10.times do |index|
#   puts "An iteration ran. Index: #{index}"
# end

5.downto(1) do |num|
  # puts "An iteration ran. Num: #{num}"
end

start = 4
end_num = 8

start.upto(end_num) do |current_num|
  # puts "Current Num: #{current_num}"
end

for i in 1..5 # Generate an inclusive range
  puts "Index: #{i}"
end

p Random.rand()
  # => random number between 0 and 1
p Random.rand( 10 )
  # => random integer up to 10
p Random.rand( 15.0 )
  # => random float up to 10
p Random.rand( 10..20 )
  # => random integer between 10 and 20 (inclusive range)
p Random.rand( 3...19 )
  # => random integer between 3 and 18 (exclusive range)
