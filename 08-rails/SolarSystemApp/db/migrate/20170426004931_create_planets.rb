class CreatePlanets < ActiveRecord::Migration[5.0]
  def change
    create_table :planets do |t|
      # t.datatype :field_name
      t.text :name
      t.text :image
      t.integer :moons
      t.float :orbit
      t.float :diameter
    end
  end
end
