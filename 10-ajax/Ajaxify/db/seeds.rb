Message.destroy_all

(1..10).to_a.each do |num|
  content = "Message #{num}"
  Message.create content: content
end

puts "Message Count: #{Message.count}"
