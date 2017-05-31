require 'rails_helper'

# To be tested in models:
  # Validations
  # Class methods
  # Instance methods
  # Associations


RSpec.describe Contact, type: :model do

  it "is valid with a first_name, last_name and an email" do
    contact = Contact.new(first_name: "Bill", last_name: "Murray", email: "bill@ga.co")
    expect( contact ).to be_valid
  end

  it "is invalid without a first_name" do
    contact = Contact.new(first_name: nil, last_name: "Murray", email: "bill@ga.co")
    # We know that there is something called contact.errors.full_messages. This is an array of all error messages
      # The error message for presence is "First name can't be blank"

    contact.valid? # Generate error messages for me (if necessary)
    
    expect(contact.errors.full_messages).to include("First name can't be blank")
  end

  it "is invalid without a last_name"
  it "is invalid without an email"
  it "is invalid with a duplicate email address"
  it "should return a full name as a string"

end
