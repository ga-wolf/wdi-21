require 'pry' # Gives us access to binding.pry (our debugger)
puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - Addition"
  puts "(s) - Subtraction"
  puts "(q) - Quit"

  # Receive a user input
  print "Enter your choice: "
  user_choice = gets().chomp()

  # Return whatever the user typed
  return user_choice
end

choice = menu()

def addition
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

until choice == "q"

  case choice
  when "a" then addition()
  when "s" then puts "You are interested in subtraction"
  end

  choice = menu()

end

puts ""
puts "Thanks for using our calculator"
