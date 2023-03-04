class Article < ApplicationRecord
  include Visible

  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10 }

  has_rich_text :body

  def created_date
    created_at.localtime.strftime '%-d/%-m/%Y'
  end
end
