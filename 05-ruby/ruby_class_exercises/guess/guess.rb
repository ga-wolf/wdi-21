require 'pry'

#Title: Guess The Number

#Activity:

# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.

#Specification:

# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.

#Extensions:

# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"


# Line breaks.
puts
p "----------------------------------------------"
print "Give me a max value: "
max_num = gets.to_i
random_number = rand(0..max_num)

# p random_number
print "Guess a number: "
guess = gets.to_i

# binding.pry
while guess != random_number
  if guess < random_number
    print "Try again, guess higher: "
  else
    print "Try again, guess lower: "
  end
  guess = gets.to_i
end

if guess == random_number
  p "Hey, you did it, the number was #{ random_number }."
end

p "----------------------------------------------"
puts
