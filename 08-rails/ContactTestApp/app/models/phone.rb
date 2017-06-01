class Phone < ApplicationRecord
  belongs_to :contact
  # This will create a new instance method called .contact
    # When we run this:
      # It will use the contact_id field, to access the related Contact
end
