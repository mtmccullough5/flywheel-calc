class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.string :name
      t.float :density
      t.float :yield_strength
      t.float :poisson_ratio

      t.timestamps
    end
  end
end
