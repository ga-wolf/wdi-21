require 'pry'

# ruby ex4.rb flintstones.txt
ARGF.each do |line|
  if line =~ /\b[A-Z][a-z]/
    puts line
  end
end
