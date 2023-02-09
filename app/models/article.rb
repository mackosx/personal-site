class Article < ApplicationRecord
  include Visible

  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10 }

  def created_date
    created_at.localtime.strftime '%-d/%-m/%Y'
  end

  def archived?
    status == 'archived'
  end
end
