require 'pry'

# ruby ex6.rb flintstones.txt
ARGF.each do |line|
  # if line =~ /wilma.+fred/ || line =~ /fred.+wilma/
  if line =~ /(wilma.+fred|fred.+wilma)/
    puts line
  end
end
