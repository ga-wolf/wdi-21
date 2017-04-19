require 'pry'

# # Array and Hash access

# ### A. Given the following data structure:

a = ["Anil", "Erik", "Jonathan"]

# 1. How would you return the string `"Erik"`?

a[1]

# 1. How would you add your name to the array?

a.push( "My name" )

# ### B. Given the following data structure:

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# 1. How would you return the string `"One"`?

h[1]

# 1. How would you return the string `"Two"`?

h[:two]

# 1. How would you return the number `2`?

h["two"]

# 1. How would you add `{3 => "Three"}` to the hash?

h[3] = "Three"

# 1. How would you add `{:four => 4}` to the hash?

h[:four] = "Four"

# ### C. Given the following data structure:

is = {true => "It's true!", false => "It's false"}

# 1. What is the return value of `is[2 + 2 == 4]`?

  # True, we've passed in a true statement

# 1. What is the return value of `is["Erik" == "Jonathan"]`?

  # False, they are not equal.

# 1. What is the return value of `is[9 > 10]`?

  # False.

# 1. What is the return value of `is[0]`?

  # nil - not evaluating anything, nor does it exist in the object.

# 1. What is the return value of `is["Erik"]`?

  # nil - As above.

# ### D. Given the following data structure:

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# 1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?

users["Jonathan"][:twitter]

# 1. How would you add the number `7` to Erik's favorite numbers?

users["Jonathan"][:favorite_numbers].push(7)

# 1. How would you add yourself to the users hash?

users["Kane"] = { twitter: "Nope", favorite_numbers: [4, 7, 47, 49, 77] }

# 1. How would you return the array of Erik's favorite numbers?

 users["Erik"][:favorite_numbers]

# 1. How would you return the smallest of Erik's favorite numbers?

 users["Erik"][:favorite_numbers].min

# 1. How would you return an array of Anil's favorite numbers that are also even?

users["Anil"][:favorite_numbers].select { | num | num.even? }

# 1. How would you return an array of the favorite numbers common to all users?

 arr = []

users.keys.each { | key, value | arr.push users[key][:favorite_numbers]  }

# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

# Chained commands - flatten the array into one big single array, get all unique values and sort them.
arr.flatten.uniq.sort

# binding.pry
