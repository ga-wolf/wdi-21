require 'rails_helper'

# To be tested in models:
  # Validations
  # Class methods
  # Instance methods
  # Associations


RSpec.describe Contact, type: :model do

  it "has a valid factory" do
    c = FactoryGirl.build :contact
    expect( c ).to be_valid
  end

  it "has three phone numbers" do
    # Create a contact
    contact = FactoryGirl.create :contact
    # Make sure that there are three phones
      # expect( ... ).to eq( ... )
    expect( contact.phones.length ).to eq(3)
  end

  it "is valid with a first_name, last_name and an email" do
    contact = FactoryGirl.build :contact
    expect( contact ).to be_valid
  end

  it "is invalid without a first_name" do
    contact = FactoryGirl.build :contact, first_name: nil
    # We know that there is something called contact.errors.full_messages. This is an array of all error messages
      # The error message for presence is "First name can't be blank"

    contact.valid? # Generate error messages for me (if necessary)

    expect(contact.errors.full_messages).to include("First name can't be blank")
  end

  # it "is invalid without a last_name"

  it "is invalid without an email" do
    # Create a new contact, making sure it doesn't have an email
    contact = FactoryGirl.build :contact, email: nil
    # Check to see if the contact is valid (this will generate error messages, if any)
    contact.valid?
    # Make sure that an error message exists for email
    error_messages = contact.errors.full_messages
    expect( error_messages ).to include("Email can't be blank")
  end

  it "is invalid with a duplicate email address" do
    FactoryGirl.create :contact, email: "bill@ga.co"
    c2 = FactoryGirl.build :contact, email: "bill@ga.co"
    c2.valid? # Generate error messages (if necessary)
    errors = c2.errors.full_messages
    expect(errors).to include("Email has already been taken")
  end

  it "should return a full name as a string" do
    contact = Contact.create first_name: "Bill", last_name: "Murray", email: "bill@ga.co"

    expect( contact.full_name() ).to eq("Bill Murray")
  end

  describe "should filter last name by letter" do
    # This will run before any it statement
    before(:each) do
      @smith = Contact.create(first_name: "John", last_name: "Smith", email: "jsmith@ga.co")
      @jones = Contact.create(first_name: "Tom", last_name: "Jones", email: "tjones@ga.co")
      @jabba = Contact.create(first_name: "The Hutt", last_name: "Jabba", email: "jabba@ga.co")
    end

    context "with matching letters" do
      it "returns a sorted array of results that match" do
        sorted_contacts = Contact.sort_by_last_name("J")
        expect( sorted_contacts ).to eq [ @jabba, @jones ]
      end
    end

    context "with non-matching letters" do
      it "omits contacts that don't match" do
        sorted_contacts = Contact.sort_by_last_name "J"
        expect(sorted_contacts).not_to include(@smith)
      end
    end

  end

end
