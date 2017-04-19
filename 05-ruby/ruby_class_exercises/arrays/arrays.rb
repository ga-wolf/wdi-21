require 'pry'

# ### 1. Create an array of the days of the week

# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday

days_of_the_week = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]

# ### 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.

# Unshift a copy of the last element in the array to the start, then pop the last index.
days_of_the_week = days_of_the_week.unshift( days_of_the_week.last )
days_of_the_week.pop

p days_of_the_week

p '-----------------------------------'

# ### 3. Create a new array of the days of the week:

weekdays = %w[ Monday, Tuesday, Wednesday, Thursday, Friday ]
weekends = %w[ Saturday, Sunday ]

split_days = [ weekdays, weekends ]

p split_days

p '-----------------------------------'

# The first inner array should be the weekdays
# The second inner array should be the weekend days
# ### 4. Remove either the weekdays or the weekends Your choice...


# Delete the array in index 1 -- weekends.
split_days.delete_at( 1 )

p split_days

p '-----------------------------------'


# ### 5. Sort the remaining days alphabetically
# Condense the arrays into a single layer (i could also just use split_days[0]).

split_days.flatten!

# Destructively sort the original array (because I want to modify it).
split_days.sort!

p split_days

# binding.pry