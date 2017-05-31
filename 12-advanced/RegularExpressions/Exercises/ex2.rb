require 'pry'

# ruby ex2.rb flintstones.txt
ARGF.each do |line|
  if line =~ /[Ff]red\b/
    puts line
  end
end
