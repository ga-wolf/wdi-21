require 'pry'

# ruby ex1.rb flintstones.txt
ARGF.each do |line|
  if line =~ /fred\b/
    puts line
  end
end
