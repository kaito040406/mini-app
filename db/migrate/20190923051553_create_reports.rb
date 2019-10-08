class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.string      :title
      t.text        :text
      t.timestamps  nuli: true
    end
  end
end
