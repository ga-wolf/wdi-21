require 'pry'

# Captures

# /giphy skateboard fail
# /giphy scorpions
# /giphy children fail
# /giphy parkour fail
# /reminder kanslknflkn
# /mute lkansflkn

message = "/giphy skateboard fail"
regex = /\/(\w+) (.+)/
matches = message.match( regex )

# p matches
command = matches[1]
search_term = matches[2]

# p command
# p search_term

message = "/giphy skateboard fail"
regex = /\/(?<cmnd>\w+) (?<term>.+)/
matches = message.match regex
p matches
p matches[:cmnd]
p matches[:term]

number = "Number: 202 555 1718"
regex = /(\d{3}).*(\d{3}).*(\d{4})/
better_regex = /(?<area>\d{3}).*(?<exchange>\d{3}).*(?<suffix>\d{4})/

matches = number.match( better_regex )
p matches[:area]
p matches[:exchange]
p matches[:suffix]

p "202 155 1719".sub( /\D/, '' )
p "202 155 1719".gsub( /\D/, '' )

p "202-555-1819".split( /\D/ )

all_numbers = "202-555-1819".scan( /\d+/ )
p all_numbers

# ANCHORS
# ^ - the character after needs to occur at the start of the string
# $ - the character before needs to occur at the end of the string

p "ruby      " =~ /^ruby/
p "   ruby   " =~ /^ruby/
p "      ruby" =~ /^ruby/

p "ruby      " =~ /ruby$/
p "   ruby   " =~ /ruby$/
p "      ruby" =~ /ruby$/

# FLAGS

p "RUBY" =~ /ruby/
p "RUBY" =~ /ruby/i

my_num = "My number: 212-555-1718"
regex = /
  (?<area>\d+)-      # This is the area code (e.g. 212)
  (?<exchange>\d+)-  # This is the exchange code (e.g. 555)
  (?<suffix>\d+)
/x
matches = my_num.match regex
p matches[:area]
p matches[:exchange]
p matches[:suffix]

str_one = "Jack,42,wolf@ga.co"
str_two = "Kane,4,kane@ga.co"
str_three = "Luke,16,luke@ga.co"
str_four = "Chris Barnaby,7,badger@ga.co"
# name,favourite number,email

# Multiline regex ( the flag x )
# Named captures (?<name>)

regex = /
  (?<name>.+),
  (?<fav_number>\d+),
  (?<email>.+)
/x # multiline and commentable

matches = str_three.match regex

p matches
p matches[:name]
p matches[:fav_number]
p matches[:email]

# Get the name, number and emails out of these strings!
