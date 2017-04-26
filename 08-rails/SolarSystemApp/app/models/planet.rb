# == Schema Information
#
# Table name: planets
#
#  id       :integer          not null, primary key
#  name     :text
#  image    :text
#  moons    :integer
#  orbit    :float
#  diameter :float
#

class Planet < ApplicationRecord
  # You have a table called planets
  # You have a model called Planet
  # ActiveRecord will link those things up for you
    # Planet.all
    # Planet.first
    # Planet.find
    # ...
  # We will be using this ActiveRecord model to perform CRUD operations
end
