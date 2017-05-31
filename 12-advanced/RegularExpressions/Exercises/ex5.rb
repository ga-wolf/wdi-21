require 'pry'

# ruby ex5.rb flintstones.txt
ARGF.each do |line|
  if line =~ /(\S)\1/
    puts line
  end
end
