require 'pry'

# A Class in Ruby:
  # A way to encapsulate functionality
  # A way to make it readable - Person.new
  # A way to replicate real life
  # A way to represent data (typically from Databases)
  # You must name them with UpperCamelCase and they must be singular

class WaterBottle
end

class Speaker
end

class Person # blueprint
  def name=(name) # Setter (creating instance variables)
    @name = name
  end

  def name # Getter (returns an instance variable)
    @name
  end

  def laugh # instance method
    puts "Laughing"
  end

  def say_hi # instance method
    puts "Hi"
  end
end

p1 = Person.new() # Instantiation (p1 is an instance of the class)
p1.laugh() # Call an instance method on an instance
p1.say_hi()
p1.name=("Jane")
p p1.name

p2 = Person.new
p2.name = "Serge"
p p2.name

# Variables
  # local_variables
    # Only visible in the exact same method
  # @instance_variables
    # Only visible on a particular instance of a class
    # Instances can see class variables, and can see global variables
  # @@class_variables
    # Visible on every instance of a particular class
    # Can see global variables
  # $global_variables
    # Visible everywhere

class User
  attr_accessor :name, :email, :age
    # This creates our getters and setters for name, email and age

  def initialize( name, email, age )
    @name = name
    @email = email
    @age = age
  end
    # The initialize method will be run as soon as you create a new instance of the class
end

# u1 = User.new()
# u1.name = "Jane"
# u1.email = "jane@ga.co"
# u1.age = 42
#
# p u1.name

u2 = User.new("Jacques", "jacques@ga.co", 100)
  # This will run the initialize method for us
p u2.class.instance_methods( false )
  # Print out everything that is possible for a given instance of a class

class Vehicle
  def sell
    p "You sold me"
  end

  def generic_vehicle_method
    p "All vehicles should be able to run this"
  end
end

class Boat < Vehicle
  def float
    p "Here I am, just floating away"
  end

  def specific_boat_method
    p "Only boats can do this"
  end
end

v1 = Vehicle.new()
v1.sell()
v1.generic_vehicle_method()
# v1.float() - THIS WON'T WORK

b1 = Boat.new
b1.sell()
b1.generic_vehicle_method()
b1.float()
b1.specific_boat_method()
