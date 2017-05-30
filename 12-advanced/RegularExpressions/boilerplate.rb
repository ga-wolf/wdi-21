require 'pry'

# ruby boilerplate.rb data.txt
# ARGF will refer to data.txt
  # When we iterate through it, we are going line by line through that file

ARGF.each do |line|
  if line =~ /fred/
    puts line
  end
end

# Regular Expression Cheat Sheet

# To create a regular expression
  # /PATTERN GOES HERE/

# To test a regular expression
  # "" =~ /SOME PATTERN/

# RANGES

# [Bb] = B or b
# [chs] = c, h or s
# [A-Z] = An uppercase letter
# [a-z] = A lowercase letter
# [A-Za-z] = Any letter
# [0-9] = Any number
# [^0-9] = Anything other than a number

# CHARACTER CLASSES

# \w = Any word character
# \W = Any non-word character
# \d = Any digit
# \D = Not a digit
# \s = Any space character
# \S = Not a space character
# .  = A wildcard, anything

# QUANTIFIERS

# * = Zero or more
# + = One or more
# ? = Optional (Zero or one times)

# {2} = Exactly 2 times
# {2,} = 2 or more times
# {,2} = 2 or less times
# {2,5} = 2, 3, 4, or 5 times

# MATCHES

# (\d) = This will store any single digit in a variable for you ( $1, $2, $3 )
