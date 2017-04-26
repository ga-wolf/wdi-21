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

require 'test_helper'

class PlanetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
