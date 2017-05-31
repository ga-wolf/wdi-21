require 'pry'

# ruby ex3.rb flintstones.txt
ARGF.each do |line|
  # Ignore the special meaning, find me a literal dot character
  if line =~ /\./
    puts line
  end
end
