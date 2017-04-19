require "pry" # binding.pry - the debugging tool
# #
# # # Creation of Arrays
# #
# # empty_arr = []
# # bros = [ "Harpo", "Gummo", "Groucho" ]
# # weird_arr = [ true, 1, 12.4, "Some String", nil ]
# #   # Ruby doesn't have null or undefined, it just has nil
# #
# # p weird_arr
# # p weird_arr.length
# #
# # array_of_five = Array.new( 5 )
# #   # Create an array with five nil values
# # five_strings = Array.new( 5, "" )
# #   # Create an array with five empty strings
# #
# # nested_array = Array.new(3) { Array.new(2) }
# #   # => [ [nil, nil], [nil, nil], [nil, nil] ]
# #
# # tic_tac_toe = Array.new(3) { Array.new(3, "") }
# # p tic_tac_toe
# #
# # list_of_classes = %w{ WDi DSi UXDi }
# #   # => ["WDi", "DSi", "UXDi"]
# # p list_of_classes
# #
# # inclusive_list_of_nums = (1..10).to_a
# # exclusive_list_of_nums = (1...5).to_a
# # alphabet = ('A'..'Z').to_a
# # five_letters = "abcde".split("")
# #
# # p alphabet.length
# #
# # # Accessing Elements
# #
# # first_letter = alphabet[0]
# # first_letter = alphabet.first
# #
# # third_letter = alphabet[2]
# #
# # last_letter = alphabet[ alphabet.length - 1 ]
# # last_letter = alphabet[-1]
# # third_last_letter = alphabet[-3]
# #
# # # Starting from the second letter, I want the next four letters
# # group_of_letters = alphabet[1, 4]
# #   # start_index, number_of_items_to_get
# #
# # # I want the group of characters between index 11 and index 23
# # another_group = alphabet[11..23]
# # another_group = alphabet[11...24]
# #
# # first_five = alphabet.take(5)
# # first_ten = alphabet.take(10)
# #
# # everything_but_the_first_five = alphabet.drop(5)
# # everything_but_the_first_three = alphabet.drop(3)
# #
# # # cant_find = alphabet.fetch(1000)
# # #   # => IndexError
# # # cant_find_with_custom_msg = alphabet.fetch(1000, "ERROR")
# # #   # => "ERROR"
# #
# # # Adding Elements
# #
# # arr = [1, 2, 3, 4, 5]
# # arr.push(6)
# # arr.push 7
# #
# # arr << 8
# # arr << 9 << 10
# #   # Append Operator: <<
# #
# # arr.unshift( 0 )
# #
# # arr.insert(3, "SOME VALUE")
# #   # Add a value into a given index
# #
# # arr.insert(5, "SOME", "OTHER", "VALUE")
# #
# # p arr
# #
# # # Removing Elements
# #
# # nums = (1..10).to_a
# #
# # nums.pop()    # Destructively remove the last element
# # nums.shift()  # Destructively remove the first element
# #
# # bad_alphabet = [ 'A', 'A', 'B', 'C', 'C', 'D', 'E' ]
# #
# # bad_alphabet.delete_at( 1 )
# # bad_alphabet.delete_at( 3 )
# #
# # bad_alphabet = [ 'A', 'A', 'B', 'C', 'C', 'D', 'E' ]
# #
# # bad_alphabet.delete( "A" )
# #   # Remove all occurences of "A"
# #
# # bad_alphabet.delete( "C" )
# #   # Remove all occurences of "C"
# #
# # weird_arr = [ "", 1, 20, nil, nil, false ]
# # compacted_arr = weird_arr.compact
# #   # Will remove all nils (but won't change the variable)
# #   # [ "", 1, 20, false ]
# #
# # arr = [ 1, 1, 1, 1, 4, 4, "", "", false, false, 42, 42, 42 ]
# # unique_items = arr.uniq
# #
# # p unique_items
#
# # Iteration
#
# alpha = ['A', 'B', 'C', 'D', 'E', 'F']
#
# alpha.each do |letter|
#   puts "Letter: #{letter}"
# end
#
# brothers = [ "Harpo", "Gummo", "Zeppo" ]
#
# brothers.each do |current_brother|
#   p "Hi, I am #{current_brother} Marx"
# end
#
# # var brothers = [ "Harpo", "Gummo", "Zeppo" ];
# # for ( var i = 0; i < brothers.length; i += 1 ) {
# #   var currentBrother = brothers[i];
# #   console.log("Hi I am " + currentBrother + " Marx");
# # }
#
# nums = [1, 2, 3, 4, 5]
#
# nums.each { |n| print n }
#
# # nums.each do |n|
# #   puts n
# # end
#
# nums.reverse_each do |num|
#   puts "Current numbers is #{num}"
# end
#
# nums.reverse_each { |num| p "Current numbers is #{num}" }
#
# list_of_nums = [ 1, 2, 3, 4, 5 ]
#
# # I want to multiply each item by 5 and save the results into an array called multiplied
#
# multiplied = list_of_nums.map do |number|
#   number * 5
# end
#
# p multiplied
#
# marx_bros = ["harpo", "gummo", "zeppo", "groucho"]
#
# # I want to manipulate in place (destructively) the marx_bros variable. I want each item to be capitalized
#
# marx_bros.map! do |bro|
#   "#{bro.capitalize} Marx"
# end
#
# p marx_bros

nums = (1..10).to_a

# Only select the numbers that are greater than 5

selected_nums = nums.select do |n|
  n > 5
    # Keep all items that are greater than five (when the above condition returns true)
    # Remove all items that are less than or equal to five (when the above condition returns false)
end

p selected_nums

list_of_nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

# Iterate through list_of_nums, and I want to remove any number that is odd

list_of_nums.reject! do |number|
  number.odd?
  # If this block returns true, the element that was currently being referenced (in the current iteration) will be removed from the array
end

p list_of_nums

blog_post_dates = [ "RECENT", "RECENT", "2 Years Ago", "RECENT", "Five Years Ago", "6 Months Ago" ]

# Create a variable called only_recent
  # Select every item in blog_post_dates that is "RECENT"
  # keep_if

only_recent = blog_post_dates.keep_if do |d|
  d == "RECENT"
end

p only_recent
