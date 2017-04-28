class CreateArtists < ActiveRecord::Migration[5.0]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :image

      t.timestamps # created_at and updated_at
    end
  end
end
