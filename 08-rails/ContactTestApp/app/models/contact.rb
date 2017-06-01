class Contact < ApplicationRecord
  has_many :phones

  validates :first_name, presence: true
  validates :email, presence: true, uniqueness: true

  # Contact.sort_by_last_name "J"
  def self.sort_by_last_name letter
    Contact.where(
      "last_name LIKE ?", letter + "%"
    ).order(:last_name)
  end

  # c.print_details()
    # Bill Murray: bill@ga.co
    # Groucho Marx: groucho@marx.com
  def print_details
    full_name + ": " + email
    # "#{full_name}: #{email}"
  end

  def full_name
    # contact_record.full_name()
      # self == contact_record
      # We can access all data on that record
    first_name + " " + last_name
  end
end
