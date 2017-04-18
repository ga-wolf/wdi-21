# ----------------------------------------------
# 1. Drinking age?

# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.
# ----------------------------------------------


# Line breaking
puts
p "----------------------------------------------"
p "Drinking age"
p "----------------------------------------------"

print "Give me your age: "
age = gets.to_i
# p age

if age < 18
  p "Go back to didney wurl."
else
  p "Lets get wasted."
end


p "----------------------------------------------"
puts 
p "----------------------------------------------"
# Line breaking

# ----------------------------------------------

# 2. Air Conditioning

# Ask the user what the: 
# current temperature is, 
# if the A/C is functional,
# what temperature they wish it was.

# If the airconditioner is functional and the current temperature is above the the desired temperature...
 # display "Turn on the A/C Please"

# If the airconditioner is non-functional and the current temperature is above the the desired temperature...
 # display "Fix the A/C now! It's hot!"

# If the airconditioner is non-functional and the current temperature is below the the desired temperature...
 # display "Fix the A/C whenever you have the chance... It's cool..."

p "Airconditioner"
p "----------------------------------------------"
p "What is the temperature?"
current_temperature = gets.to_i
p "Is the airconditioner working or broken?"
airconditioner_status = gets.chomp
p "What is your desired_temperature?"
desired_temperature = gets.to_i

if airconditioner_status == "working" && current_temperature > desired_temperature
  p "Turn the AC on."
elsif airconditioner_status != "working" && current_temperature > desired_temperature
  p "Fix the A/C now! It's hot!"
else
  p"Fix the A/C whenever you have the chance... It's cool..."
end


p "----------------------------------------------"
puts
p "----------------------------------------------"

# ----------------------------------------------
# 3. Sydney Suburbs

# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

p "Suburb valuator."
p "----------------------------------------------"

p "What is your suburb?"
suburb = gets.chomp.downcase

case suburb
  when "manly"
    p "Ladeeda, what a fancy man."
  when "redfern"
    p "What a nice tent, you have."
  when "punchbowl"
    p "Say hi to my mate Trent."
  when "rockdale"
    p "Lets get drunk at the train station and fight commuters."
  else
    p "I don't know where that is. I don't do the geographies."
end

p "----------------------------------------------"