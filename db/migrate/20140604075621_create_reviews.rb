class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :description
      t.string :author
      t.integer :product_id

      t.timestamps
    end
  end
end
